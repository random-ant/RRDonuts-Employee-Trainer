import { useState } from "react";
import OrderList from "./OrderList";
import Prompter from "../Prompter/Prompter";
import Popup from "../Popup/Popup";
import useSolution from "../../hooks/useSolution";
import "./orders.css";

export default function OrderPanel() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { checkOrder } = useSolution();

  return (
    <div className="order-container">
      <Prompter />
      <OrderList />

      {/* TODO: add money summary */}

      <button
        className="checkout-button"
        onClick={() => {
          const error = checkOrder();
          setErrorMsg(error);
          if (error !== "") setPopupOpen(true);
        }}
      >
        CHECKOUT
      </button>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        {errorMsg}
      </Popup>
    </div>
  );
}
