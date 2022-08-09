import './styles.css';

function Contact(props) {
	const onDelete = (event) => {
		event.preventDefault();
		props.onDelete(props.id);
	};

	return (
		<div className="contact-container">
			<div className="contact">
				<div className="preview"></div>
				<div className="preview-name">{props.name.slice(0, 1)}</div>
				<div className="contact-title">{props.name}</div>
				<div
					className="delete-icn"
					onClick={onDelete}
				>
					+
				</div>
			</div>
		</div>
	);
}

export default Contact;
