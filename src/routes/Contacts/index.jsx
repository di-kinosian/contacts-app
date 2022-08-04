import './styles.css';
import Contact from '../../components/Contact';
import { ReactComponent as AddIcon } from '../../assets/icons-plus.svg';
import { useState } from 'react';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';

const contacts = [{ id: 1, name: 'Alex', position: 'developer' }];

function Contacts() {
	const [showing, setShowing] = useState(false);

	const showingModal = () => {
		setShowing(true);
	};

	const onCloseModal = () => {
		setShowing(false);
	};

	const onDeleteContact = () => {};

	return (
		<>
			<div className="contacts-container">
				{contacts.map((contact) => {
					return (
						<Link to={'/' + contact.id} style={{ textDecoration: 'none' }}>
							<Contact
								name={contact.name}
								onDelete={onDeleteContact}
							/>
						</Link>
					);
				})}

				<div className="row-btn" onClick={showingModal}>
					<AddIcon className="add-icn" />
				</div>
			</div>
			{showing ? (
				<Modal onClose={onCloseModal}>
					<div className="contact-field contact-field-head">
						Create contact:
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
						<button className="button-primary button save-btn">Save</button>
					</div>
				</Modal>
			) : null}
		</>
	);
}

export default Contacts;
