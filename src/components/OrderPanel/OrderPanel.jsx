import { useContext, useState } from "react";
import { CustomerNameContext } from "../../helpers/context";
import OrderList from "./OrderList";
import Prompter from "../Prompter/Prompter";
import Popup from "../Popup/Popup";
import PriceList from "./PriceList";
import useSolution from "../../hooks/useSolution";
import "./orders.css";

export default function OrderPanel() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { checkOrder } = useSolution();
  const { customerName } = useContext(CustomerNameContext);

  return (
    <div className="order-container">
      <Prompter />
      <p id="name-display">{customerName ? customerName : "NEW ORDER"}</p>
      <OrderList />
      <PriceList />

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
