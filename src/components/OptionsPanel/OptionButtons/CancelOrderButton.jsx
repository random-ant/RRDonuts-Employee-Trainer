import { useState, useContext } from "react";
import {
  OrderContext,
  SelectedItemsContext,
  CustomerNameContext,
} from "../../../helpers/Context";
import Popup from "../../Popup/Popup";

export default function CancelOrderButton() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { setUserOrder } = useContext(OrderContext);
  const { setSelectedItems } = useContext(SelectedItemsContext);
  const { setCustomerName } = useContext(CustomerNameContext);

  return (
    <>
      <button id="cancel-button" onClick={() => setPopupOpen(true)}>
        CANCEL ORDER
      </button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        Are you sure you want to clear all your items from the order?
        <div>
          <button
            className="yes-option"
            onClick={() => {
              setUserOrder([]);
              setSelectedItems([]);
              setCustomerName("");
              setPopupOpen(false);
            }}
          >
            Yes
          </button>
          <button className="no-option" onClick={() => setPopupOpen(false)}>
            No
          </button>
        </div>
      </Popup>
    </>
  );
}
