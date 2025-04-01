import { useContext } from "react";
import { CurrMenuPageContext } from "../../helpers/context";
import DrinksHeader from "./DrinksHeader";
import QuantitySelectHeader from "./QuantitySelectHeader";

export default function MenuHeader() {
  const { currMenuPage } = useContext(CurrMenuPageContext);

  if (currMenuPage >= 10) {
    return <DrinksHeader />;
  } else return <QuantitySelectHeader />;
}
