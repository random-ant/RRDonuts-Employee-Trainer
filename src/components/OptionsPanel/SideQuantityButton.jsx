import { useState, useContext } from "react";
import Popup from "../Popup/Popup";
import { QuantityContext } from "../../helpers/context";

export default function SideQuantityButton() {
  const { currItemQuantity, setCurrItemQuantity } = useContext(QuantityContext);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleInputChange = (event) => {
    var value = event.target.value;
    if (value < 1 || value > 99) {
      return;
    }
    setCurrItemQuantity(value);
  };

  return (
    <>
      <button id="quantity-button" onClick={() => setPopupOpen(true)}>
        QUANTITY
      </button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <label>Enter quantity</label>
        <br />
        <input type="number" value={currItemQuantity} onChange={handleInputChange} />
      </Popup>
    </>
  );
}
