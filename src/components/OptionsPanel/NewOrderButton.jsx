import { useState } from "react";
import Popup from "../Popup/Popup";
import useSolution from "../../hooks/useSolution";

export default function NewOrderButton() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { nextSolution } = useSolution();

  return (
    <>
      <button id="new-order-button" onClick={() => setPopupOpen(true)}>
        NEW ORDER
      </button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        Are you sure you want to start a <br />
        new simulated order?
        <div>
          <button
            id="yes-option"
            onClick={() => {
              setPopupOpen(false);
              nextSolution();
            }}
          >
            Yes
          </button>
          <button id="no-option" onClick={() => setPopupOpen(false)}>
            No
          </button>
        </div>
      </Popup>
    </>
  );
}
