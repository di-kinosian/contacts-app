import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { ReactComponent as IconEddit } from '../../assets/icon-edit.svg';
import { ReactComponent as IconTrash } from '../../assets/icon-trash.svg';
import Modal from '../../components/Modal';

const contacts = {
	id: 2,
	name: 'John',
	number: '238-098-23-123',
	position: 'qa',
};

function ContactsDeteils(props) {
	const [showingEddit, setShowingEddit] = useState(false);
	const [showingDelete, setShowingDelete] = useState(false);

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
	return (
		<>
			<div className="deteils-container">
				<div className="wrap-fields wrap-head">
					<div className="description head">{contacts.name}</div>
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
					<div className="description">{contacts.number}</div>
				</div>
				<div className="wrap-fields">
					<div className="deteils-field">Position:</div>
					<div className="description">{contacts.position}</div>
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
					<div className="deteils-field details-field-head">
						Eddit contact:
					</div>
					<div className="contact-field-wrapper">
						name:
						<input type="text" className="contact-input" />
						number:
						<input type="text" className="contact-input" />
						position:
						<input type="text" className="contact-input" />
					</div>
					<div className="contact-button-wrapper">
						<button className="button-secondary button">
							Cancel
						</button>
						<button className="button-primary button save-btn">
							Save
						</button>
					</div>
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
						<button className="button-primary button save-btn">
							Delete
						</button>
					</div>
				</Modal>
			) : null}
		</>
	);
}

export default ContactsDeteils;
