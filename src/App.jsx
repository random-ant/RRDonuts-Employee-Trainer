import { useState } from "react";
import MenuPanel from "./components/MenuPanel/MenuPanel";
import OrderPanel from "./components/OrderPanel/OrderPanel";
import OptionsPanel from "./components/OptionsPanel/OptionPanel";
import {
  OrderContext,
  QuantityContext,
  SelectedItemsContext,
} from "./helpers/context";
import "./styles.css";

export default function App() {
  return (
    <>
      <ContextProvider>
        <div className="container">
          <OptionsPanel />
          <MenuPanel />
          <OrderPanel />
        </div>
      </ContextProvider>
    </>
  );
}

function ContextProvider({ children }) {
  const [userOrder, setUserOrder] = useState([]);
  const [currItemQuantity, setCurrItemQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      <QuantityContext.Provider
        value={{ currItemQuantity, setCurrItemQuantity }}
      >
        <OrderContext.Provider value={{ userOrder, setUserOrder }}>
          {children}
        </OrderContext.Provider>
      </QuantityContext.Provider>
    </SelectedItemsContext.Provider>
  );
}
