import { useContext } from "react";
import { OrderContext, SolutionContext, CustomerNameContext } from "../helpers/context";
import { getRandSolution } from "../helpers/solutions";
import getItem from "../helpers/menuItems";

export default function useSolution() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { currSolution, setCurrSolution } = useContext(SolutionContext);
  const { customerName, setCustomerName } = useContext(CustomerNameContext);

  /**
   * Checks order against the current solution.
   *
   * @return {String} empty string if successful, error message otherwise
   */
  const checkOrder = () => {
    console.log(userOrder);
    var errorMsg = "";

    // check customer name
    if (customerName.toLowerCase() !== currSolution.customer_name.toLowerCase())
      errorMsg = "Customer name is incorrect";

    // check if extra items existsD
    for (const item of userOrder) {
      if (!currSolution.parts.has(item.id)) {
        errorMsg = `Order contains extra items \n(${getItem(item.id).display_name})`;
        break;
      }
    }

    // check if all items in the solution have been covered
    for (const [partId, partData] of currSolution.parts.entries()) {
      const orderItem = userOrder.find((item) => item.id === partId);
      if (!orderItem) {
        errorMsg = `There is an item missing from the order\n(${getItem(partId).display_name})`;
        break;
      } else if (orderItem.quantity !== partData.amount) {
        errorMsg = `Wrong amount of a ${orderItem.name} in order`;
        break;
      }
    }

    // reset everything if the order is correct
    if (errorMsg === "") {
      let good = new Audio("./sounds/good.mp3");
      good.play();
      nextSolution();
    } else {
      // let bad = new Audio("./sounds/wronganswer-37702.mp3");
      // bad.play();
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
