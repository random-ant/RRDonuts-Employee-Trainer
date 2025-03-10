import OrderList from "./OrderList";
import Prompter from "../Prompter/Prompter";
import useSolution from "../../hooks/useSolution";
import "./orders.css";

export default function OrderPanel() {
  const { checkOrder } = useSolution();

  return (
    <div className="order-container">
      <Prompter />
      <OrderList />

      <button className="checkout-button" onClick={checkOrder}>
        CHECKOUT
      </button>
    </div>
  );
}
