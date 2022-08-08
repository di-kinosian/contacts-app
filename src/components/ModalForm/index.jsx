import './styles.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ModalForm(props) {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [number, setNumber] = useState('');

	const onChangeName = (event) => {
		setName(event.target.value);
	};

	const onChangeNumber = (event) => {
		setNumber(event.target.value);
	};

	const onChangePosition = (event) => {
		setPosition(event.target.value);
	};

	const onSave = () => {
		props.onSave({
			id: uuidv4(),
			name: name,
			position: position,
			number: number,
		});
	};

	const onClear = () => {
		setName('');
		setNumber('');
		setPosition('');
	};

	return (
		<>
			<div className="contact-field contact-field-head">
				{props.title}
			</div>
			<div className="contact-field-wrapper">
				name:
				<input
					type="text"
					className="contact-input"
					value={name}
					onChange={onChangeName}
					placeholder="Enter name"
				/>
				number:
				<input
					type="text"
					className="contact-input"
					value={number}
					onChange={onChangeNumber}
					placeholder="Enter number"
				/>
				position:
				<input
					type="text"
					className="contact-input"
					value={position}
					onChange={onChangePosition}
					placeholder="Enter position"
				/>
			</div>
			<div className="contact-button-wrapper">
				<button className="button-secondary button" onClick={onClear}>
					Cancel
				</button>
				<button
					className="button-primary button save-btn"
					onClick={onSave}
					disabled={!name || !number}
				>
					Save
				</button>
			</div>
		</>
	);
}

export default ModalForm;
