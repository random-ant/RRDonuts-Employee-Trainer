import { useState, useContext } from "react";
import Popup from "../Popup/Popup";
import { CustomerNameContext } from "../../helpers/context";

export default function NameButton() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { customerName, setCustomerName } = useContext(CustomerNameContext);

  const handleInputChange = (event) => {
    let input = event.target.value;
    setCustomerName(input.toUpperCase());
  };

  return (
    <>
      <button id="name-button" onClick={() => setPopupOpen(true)}>
        NAME TAB
      </button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <label>Customer Name:</label>
        <br />
        <input type="text" value={customerName} onChange={handleInputChange} />
      </Popup>
    </>
  );
}
