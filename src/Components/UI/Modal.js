import './Modal.css'
import React from 'react' 
import  ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className="backdrop" />;
  };
  
  const ModalOverlay = (props) => {
    return (
      <div className="modal">
        <div className="content">{props.children}</div>
      </div>
    );
  };
  
  const overlay = document.getElementById("overlays");
  
  const Modal = (props) => {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(<Backdrop />, overlay)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
      </React.Fragment>
    );
  };
  
  export default Modal;