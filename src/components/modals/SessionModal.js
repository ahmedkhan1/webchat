import React from "react";
import "./SessionModal.css";

const SessionModal = ({ isOpen, onClose, onExtendSession, modalTimer  }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Chat Session Timeout</h2>
        <p className="modal-body">
        <p>Your chat session will be closed in {formatTime(modalTimer)} minutes due to inactivity.</p>
        </p>
        <div className="modal-actions">
          <button className="extend-button" onClick={onExtendSession}>
            Extend Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionModal;
