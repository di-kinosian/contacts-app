import './styles.css';

function Contact(props) {
	const onDelete = (event) => {

	};
	return (
		<div className="contact-container">
			<div className="contact">
				<div className="preview"></div>
				<div className="preview-name">{props.name.slice(0, 1)}</div>
				<div className="contact-title">{props.name}</div>
				<div className="close-btn" onClick={onDelete} >
					+
				</div>
			</div>
		</div>
	);
}

export default Contact;
