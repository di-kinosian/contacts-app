import { ReactComponent as CloseIcon } from '../../assets/icons-close.svg';
import './styles.css';

const  Modal = (props)=> {
	// console.log(props, 'here');
	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className="close-icon" onClick={props.onClose}>
					<CloseIcon />
				</div>
				{props.children}
			</div>
		</div>
	);
}

export default Modal;
