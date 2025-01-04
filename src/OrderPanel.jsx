import { useContext } from "react";
import { OrderContext, QuantityContext } from "./context";

export default function OrderPanel() {
  const { order, setOrder } = useContext(OrderContext);
  const { itemQuantity, setItemQuantity } = useContext(QuantityContext);

  return (
    <>
      <div className="order-container">
        {[...order].map(([key, value]) => (
          <p>
            {key}: {value}
          </p>
        ))}
      </div>
    </>
  );
}
