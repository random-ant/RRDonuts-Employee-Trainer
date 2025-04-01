import { createContext } from "react";

export const OrderContext = createContext();
export const QuantityContext = createContext(1);
export const SelectedItemsContext = createContext([0]);
export const SolutionContext = createContext();
export const CustomerNameContext = createContext("");
export const CurrMenuPageContext = createContext(1);
export const ModsContext = createContext([""]); // last item is the memo
