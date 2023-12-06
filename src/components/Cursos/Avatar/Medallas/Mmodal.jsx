import React from 'react';
import "../../../../Styles/Mmodal.css"

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={handleClose} className="modal-close-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;