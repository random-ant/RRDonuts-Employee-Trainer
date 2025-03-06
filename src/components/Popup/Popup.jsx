import "./popup.css";

export default function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup-container">
      <div className="popup-box">
        <div className="popup-content">{children}</div>

        <button onClick={onClose} className="close-popup-button">
          OK
        </button>
      </div>
    </div>
  );
}
