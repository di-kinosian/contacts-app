import './styles.css';

function Contact(props) {
	const onDelete = (event) => {
		props.onDelete(event.target.dataset.id);
		event.preventDefault();
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
					data-id={props.id}
				>
					+
				</div>
			</div>
		</div>
	);
}

export default Contact;
