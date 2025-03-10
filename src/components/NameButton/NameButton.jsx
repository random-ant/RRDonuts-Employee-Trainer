import { useState, useContext } from "react";
import Popup from "../Popup/Popup";
import { CustomerNameContext } from "../../helpers/context";
import "./name.css";

export default function NameButton() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { customerName, setCustomerName } = useContext(CustomerNameContext);

  const handleInputChange = (event) => {
    setCustomerName(event.target.value);
  };

  return (
    <>
      <button id="name-button" onClick={() => setPopupOpen(true)}>
        NAME TAB
      </button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <input type="text" value={customerName} onChange={handleInputChange} />
      </Popup>
    </>
  );
}
