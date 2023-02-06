import React, { Fragment } from 'react'
import './Modal.css'


const Backdrop = ({ close, show }) => {
    return (
      <div
        className={`${"backDrop"} ${show ? "showBackDrop" : null}`}
        onClick={close}
      ></div>
    );
  };
  
  const Overlay = ({ children, show }) => (
    <div className={`${"overlay"} ${show ? "showOverlay" : null}`}>
      {children}
    </div>
  );

const Modal = ({ show, closeModal, children }) => {
  return (
    <Fragment>
      
        <Backdrop close={closeModal} show={show} />
        <Overlay show={show}>{children}</Overlay>
          
    </Fragment> 
  );

}

export default Modal