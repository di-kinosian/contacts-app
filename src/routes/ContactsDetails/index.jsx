import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { ReactComponent as IconEddit } from '../../assets/icon-edit.svg';
import { ReactComponent as IconTrash } from '../../assets/icon-trash.svg';
import Modal from '../../components/Modal';
import ModalForm from '../../components/ModalForm';
import { connect } from 'react-redux';
import { contactsSlice } from '../../redux/contacts';

const contacts = {
	id: 2,
	name: 'John',
	number: '238-098-23-123',
	position: 'qa',
};

function ContactsDeteils(props) {
	const [showingEddit, setShowingEddit] = useState(false);
	const [showingDelete, setShowingDelete] = useState(false);

	const { id } = useParams();
	console.log(id);

	const contact = props.dataList.find((el) => {
		return el.id === id;
	});
	console.log(contact);

	const onEdditContact = () => {
		setShowingEddit(true);
	};

	const onCloseModal = () => {
		setShowingEddit(false);
		setShowingDelete(false);
	};

	const onDeleteContact = () => {
		setShowingDelete(true);
	};

	const onSaveContact = (el) => {
		props.dispatch(
			contactsSlice.actions.onEdit({
				id: id,
				name: el.name,
				position: el.position,
				number: el.number,
			})
		);
	};
	return (
		<>
			<div className="deteils-container">
				<div className="wrap-fields wrap-head">
					<div className="description head">{contact.name}</div>
					<IconEddit
						className="deteils-icon eddit"
						onClick={onEdditContact}
					/>
					<IconTrash
						className="deteils-icon"
						onClick={onDeleteContact}
						// onClick={onDeleteContact}
					/>
				</div>
				<div className="wrap-fields">
					<div className="deteils-field">Number:</div>
					<div className="description">{contact.number}</div>
				</div>
				<div className="wrap-fields">
					<div className="deteils-field">Position:</div>
					<div className="description">{contact.position}</div>
				</div>
				<div className="row-icon"></div>
			</div>
			<div className="wrap-btn-back">
				<Link to="/">
					<button type="button" className="btn-back">
						Back
					</button>
				</Link>
			</div>
			{showingEddit ? (
				<Modal onClose={onCloseModal}>
					<ModalForm
						title={'Eddit contact:'}
						onSave={onSaveContact}
						contact={contact}
					/>
				</Modal>
			) : null}
			{showingDelete ? (
				<Modal onClose={onCloseModal}>
					<div className="confirm-deletion">
						Please confirm deletion!
					</div>
					<div className="contact-button-wrapper">
						<button className="button-secondary button">
							Cancel
						</button>
						<button className="button-primary button delete-btn">
							Delete
						</button>
					</div>
				</Modal>
			) : null}
		</>
	);
}

const mapStateToProps = (state) => {
	console.log(state, 'NANA');
	return {
		dataList: state.contacts.list,
	};
};

const ConnectedContactsDetails = connect(
	mapStateToProps,
	null
)(ContactsDeteils);

export default ConnectedContactsDetails;
