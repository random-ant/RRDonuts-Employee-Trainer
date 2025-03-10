import { useContext } from "react";
import { OrderContext, SelectedItemsContext } from "../../helpers/context";
import useSolution from "../../hooks/useSolution";
import NameButton from "../NameButton/NameButton";
import "./options.css";

export default function OptionsPanel() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const { nextSolution } = useSolution();

  const clickDelete = () => {
    setUserOrder(userOrder.filter((item, index) => !selectedItems.includes(index)));
    setSelectedItems([]);
  };

  return (
    <div className="option-container-outer">
      <div className="option-container-inner">
        <button id="exit-button">EXIT</button>
        <button id="cancel-button">CANCEL ORDER</button>
        <NameButton />
        <button id="new-order-button" onClick={nextSolution}>
          NEW ORDER
        </button>
        <button id="delete-button" onClick={clickDelete}>
          DELETE
        </button>
        <button id="quantity-button">QUANTITY</button>
        <button id="modify-button">MODIFY</button>
        <button>TO TENDERS</button>
        <button>CREDIT CARD</button>
        <button>TO HOME</button>
        <button>FUNCTION</button>
      </div>
    </div>
  );
}
