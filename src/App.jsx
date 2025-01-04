import { useState } from "react";
import MenuPanel from "./MenuPanel";
import OrderPanel from "./OrderPanel";
import { OrderContext, QuantityContext } from "./context";
import "./styles.css";

export default function App() {
  const [order, setOrder] = useState(new Map());
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <>
      <QuantityContext.Provider value={{ itemQuantity, setItemQuantity }}>
        <OrderContext.Provider value={{ order, setOrder }}>
          <div className="container">
            <div class="side-container">
              <button>CANCEL ORDER</button>
              <button>NAME TAB</button>
              <button>NEW ORDER</button>
              <button>DELETE</button>
              <button>QUANTITY</button>
              <button>MODIFY</button>
              <button>TO TENDERS</button>
              <button>CREDIT CARD</button>
              <button>TO HOME</button>
              <button>FUNCTION</button>
            </div>

            <MenuPanel />

            <OrderPanel />
          </div>
        </OrderContext.Provider>
      </QuantityContext.Provider>
    </>
  );
}
