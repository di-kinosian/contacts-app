import './styles.css';
import Contact from '../../components/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as AddIcon } from '../../assets/icons-plus.svg';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';
import modalSlice from '../../redux/modal';
import ModalForm from '../../components/ModalForm';
import { useState } from 'react';
import { connect } from 'react-redux';
import { contactsSlice } from '../../redux/contacts';

// import { v4 as uuidv4 } from 'uuid';

function Contacts(props) {
	console.log(props, 'kkkkkk');
	// const [list, setList] = useState(
	// 	JSON.parse(localStorage.getItem('list') || '') || []
	// );
	/*-----------------------------------------------*/

	/*-----------------------------------------------*/
	const isModalOpen = useSelector((state) => state.modal.isOpen);
	// const dispatch = useDispatch();

	const showingModal = () => {
		props.dispatch(modalSlice.actions.openClose(true));
	};
	/*-----------------------------------------------*/

	const onCloseModal = () => {
		props.dispatch(modalSlice.actions.openClose(false));
	};

	const onDeleteContact = (id) => {
		console.log(id);
		// const newList = list.filter((contact) => {
		// 	return String(contact.id) !== id;
		// });

		props.dispatch(contactsSlice.actions.onDelete(id));
		// saveToLocalStorage(newList);
		
	};

	const onSaveContact = (contact) => {
		props.dispatch(modalSlice.actions.openClose(false));
		// saveToLocalStorage(newList);
		props.dispatch(contactsSlice.actions.add(contact));
	};

	// const saveToLocalStorage = (list) => {
	// 	localStorage.setItem('list', JSON.stringify(list));
	// };

	return (
		<>
			<div className="contacts-container">
				<button
					className="button-primary button "
					onClick={showingModal}
				>
					Add+
				</button>
				{props.dataList.map((contact) => {
					return (
						<Link
							to={'/' + contact.id}
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<Contact
								name={contact.name}
								id={contact.id}
								onDelete={onDeleteContact}
							/>
						</Link>
					);
				})}
			</div>
			{isModalOpen ? (
				<Modal onClose={onCloseModal}>
					<ModalForm
						title={'Create contact:'}
						onSave={onSaveContact}
					></ModalForm>
				</Modal>
			) : null}
		</>
	);
}

const mapStateToProps = (state) => {
	console.log(state, 'PPPAPAA');
	return {
		dataList: state.contacts.list,
	};
};

const ConnectedContacts = connect(mapStateToProps, null)(Contacts);

export default ConnectedContacts;
