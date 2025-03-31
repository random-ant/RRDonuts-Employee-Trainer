import { useState } from "react";
import MenuPanel from "./components/MenuPanel/MenuPanel";
import OrderPanel from "./components/OrderPanel/OrderPanel";
import OptionsPanel from "./components/OptionsPanel/OptionPanel";
import Footer from "./components/Footer/Footer";
import {
  OrderContext,
  QuantityContext,
  SelectedItemsContext,
  SolutionContext,
  CustomerNameContext,
  CurrMenuPageContext,
} from "./helpers/context";
import { getRandSolution } from "./helpers/solutions";
import "./styles.css";

export default function App() {
  return (
    <>
      <ContextProvider>
        <div className="container">
          <div className="main-content">
            <div className="panel-container">
              <OptionsPanel />
              <MenuPanel />
              <OrderPanel />
            </div>
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
}

function ContextProvider({ children }) {
  const [userOrder, setUserOrder] = useState([]);
  const [currItemQuantity, setCurrItemQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currSolution, setCurrSolution] = useState(getRandSolution());
  const [customerName, setCustomerName] = useState("NEW ORDER");
  const [currMenuPage, setCurrMenuPage] = useState(1);

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      <QuantityContext.Provider value={{ currItemQuantity, setCurrItemQuantity }}>
        <OrderContext.Provider value={{ userOrder, setUserOrder }}>
          <SolutionContext.Provider value={{ currSolution, setCurrSolution }}>
            <CustomerNameContext.Provider value={{ customerName, setCustomerName }}>
              <CurrMenuPageContext.Provider value={{ currMenuPage, setCurrMenuPage }}>
                {children}
              </CurrMenuPageContext.Provider>
            </CustomerNameContext.Provider>
          </SolutionContext.Provider>
        </OrderContext.Provider>
      </QuantityContext.Provider>
    </SelectedItemsContext.Provider>
  );
}
