import { useContext } from "react";
import { OrderContext, SolutionContext, CustomerNameContext } from "../helpers/context";
import { getRandSolution } from "../helpers/solutions";

export default function useSolution() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { currSolution, setCurrSolution } = useContext(SolutionContext);
  const { customerName, setCustomerName } = useContext(CustomerNameContext);

  /**
   * Checks order against solution
   * @return {String} empty string if successful, error message otherwise
   */
  const checkOrder = () => {
    console.log(currSolution);
    var errorMsg = "";
    var numInOrder = 0;
    for (const item of userOrder) {
      if (!currSolution.parts.has(item.id)) {
        // item not in solution
        errorMsg = "There's an item that's shouldn't be there";
        break;
      }

      numInOrder++;
      const requirements = currSolution.parts.get(item.id);
      if (item.quantity != requirements.amount) "Quantity of item is incorrect";
    }

    // check if all item in solution have been covered
    if (numInOrder !== currSolution.parts.size) errorMsg = "Not all items are present";

    // check customer name
    if (customerName !== currSolution.customer_name) errorMsg = "Customer name is incorrect";

    if (errorMsg === "") {
      // reset everything
      nextSolution();
    } else {
      // TODO: notify user of wrong doing
      console.log(errorMsg);
    }

    return errorMsg;
  };

  /**
   * Resets the state and randomizes to a new solution
   */
  const nextSolution = () => {
    setCurrSolution(getRandSolution());
    setUserOrder([]);
    setCustomerName("");
  };

  return { checkOrder, nextSolution };
}
