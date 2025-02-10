import React from "react";
import "./CloseModal.css";
import problem from "../../assets/problem.png";

const CloseModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={problem} alt="close" />
        <p>Do you really want to close the chat?</p>
        <div className="modal-buttons">
          <button className="modal-confirm-button" onClick={onConfirm}>
            Close the Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseModal;
