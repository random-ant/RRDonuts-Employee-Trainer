import { useContext } from "react";
import { OrderContext, SelectedItemsContext } from "../../helpers/context";
import NameButton from "./NameButton";
import NewOrderButton from "./NewOrderButton";
import SideQuantityButton from "./SideQuantityButton";
import CancelOrderButton from "./CancelOrderButton";
import "./options.css";

export default function OptionsPanel() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);

  const clickDelete = () => {
    setUserOrder(userOrder.filter((item, index) => !selectedItems.includes(index)));
    setSelectedItems([]);
  };

  return (
    <div className="option-container-outer">
      <div className="option-container-inner">
        <button id="exit-button" className="disabled-button">
          EXIT
        </button>
        <CancelOrderButton />
        <NameButton />
        <NewOrderButton />
        <button id="delete-button" onClick={clickDelete}>
          DELETE
        </button>
        <SideQuantityButton />
        <button id="modify-button" className="disabled-button">
          MODIFY
        </button>
        <button id="tenders-button" className="disabled-button">
          TO TENDERS
        </button>
        <button id="credit-card-button" className="disabled-button">
          CREDIT CARD
        </button>
        <button id="to-home-button" className="disabled-button">
          TO HOME
        </button>
        <button id="function-button" className="disabled-button">
          FUNCTION
        </button>
      </div>
    </div>
  );
}
