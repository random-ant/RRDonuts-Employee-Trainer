import { useContext } from "react";
import { OrderContext, SelectedItemsContext } from "../../helpers/context";
import "./orders.css";

export default function OrderList() {
  const { userOrder } = useContext(OrderContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);

  function updateSelectedItems(itemIndex) {
    if (selectedItems.includes(itemIndex)) {
      // if already selected, remove from selected
      setSelectedItems(selectedItems.filter((item) => item != itemIndex));
    } else {
      // else, add to selected
      setSelectedItems([...selectedItems, itemIndex]);
    }
  }

  return (
    <div className="order-list-container">
      {userOrder.map((item, index) => (
        <div
          key={index}
          className={`order-item ${selectedItems.includes(index) ? "selected-item" : ""}`}
          onClick={() => updateSelectedItems(index)}
        >
          <div className="text-order-container">
            <p className="order-quantity-text">{item.quantity}</p>
            <p className="order-item-text">{item.name}</p>
            <p className="order-price-text">${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <div className="order-modifications">
            {/* <p>{item.memo && item.memo}</p> */}
            {item.mods.map((m, index) => (
              <p key={index}>{m}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
