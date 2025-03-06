import OrderList from "./OrderList";
import Prompter from "../Prompter/Prompter";

export default function OrderPanel() {
  return (
    <div className="order-container">
      <Prompter />
      <OrderList />
      
    </div>
  );
}
