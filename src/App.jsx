import { useState } from "react";
import MenuPanel from "./MenuPanel";
import OrderPanel from "./OrderPanel";
import SidePanel from "./SidePanel";
import { OrderContext, QuantityContext, SelectedItemsContext } from "./context";
import "./styles.css";

export default function App() {
  return (
    <>
      <ContextProvider>
        <div className="container">
          <SidePanel />
          <MenuPanel />
          <OrderPanel />
        </div>
      </ContextProvider>
    </>
  );
}

function ContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      <QuantityContext.Provider value={{ itemQuantity, setItemQuantity }}>
        <OrderContext.Provider value={{ order, setOrder }}>
          {children}
        </OrderContext.Provider>
      </QuantityContext.Provider>
    </SelectedItemsContext.Provider>
  );
}
