import React from "react";
import "./CloseModal.css";

const CloseModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Close Chat</h2>
        <p>Are you sure you want to close this chat? This action cannot be undone.</p>
        <div className="modal-buttons">
          <button className="modal-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-confirm-button" onClick={onConfirm}>
            Close Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseModal;
