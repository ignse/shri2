import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

class Modal extends React.Component {

    escFunction = event => {
        if(event.keyCode === 27) {
            this.props.onClose(event);
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render() {
        const { children, header, onClose } = this.props;

        return ReactDOM.createPortal(
            (
                <ModalOverlay onClose={onClose}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <div className={`${styles.header}`}>
                            <span className={`${styles.title}`}>
                                {header}
                            </span>
                            <span className={`${styles.close}`}>
                            </span>
                        </div>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </div>
                </ModalOverlay>
            ),
            modalRoot
        );
    }
}

ModalOverlay.propTypes = {
    children: PropTypes.element,
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export default Modal;
