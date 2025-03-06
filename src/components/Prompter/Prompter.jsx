import { useState } from "react";
import Popup from "../Popup/Popup";
import "./prompter.css";

export default function Prompter() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div className="prompt-container" onClick={() => setPopupOpen(true)}>
        click for prompt
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <p>This is a reusable popup component.</p>
      </Popup>
    </>
  );
}
