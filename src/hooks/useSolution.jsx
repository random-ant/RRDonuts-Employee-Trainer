import { useContext } from "react";
import { OrderContext, SolutionContext, CustomerNameContext } from "../helpers/Context";
import { getRandSolution } from "../helpers/solutions";
import getItem from "../helpers/menuItems";

export default function useSolution() {
  const { userOrder, setUserOrder } = useContext(OrderContext);
  const { currSolution, setCurrSolution } = useContext(SolutionContext);
  const { customerName, setCustomerName } = useContext(CustomerNameContext);

  /**
   * Checks order against solution
   * @return {String} empty string if successful, error message otherwise
   */
  const checkOrder = () => {
    // console.log(userOrder);
    var errorMsg = "";

    // check customer name
    if (customerName.toLowerCase() !== currSolution.customer_name.toLowerCase())
      errorMsg = "Customer name is incorrect";

    // check if extra items existsD
    for (const item of userOrder) {
      if (!currSolution.parts.has(item.id) && !currSolution.additional_parts.has(item.id)) {
        errorMsg = "Order contains an extra item that shouldn't be there";
        break;
      }
    }

    // check if all items in the solution have been covered
    for (const [partId, partData] of currSolution.parts.entries()) {
      const orderItem = userOrder.find((item) => item.id === partId);
      if (!orderItem) {
        errorMsg = `There is an item missing from the order (${getItem(partId).display_name})`;
        break;
      } else if (
        orderItem.quantity !== partData.amount &&
        orderItem.quantity !==
          partData.amount + currSolution.additional_parts.get(partId).amount
      ) {
        errorMsg = `Wrong amount of a ${orderItem.name} in order`;
        break;
      }
    }

    // check if there's a note in the order (make sure everything else is correct first)
    // if (currSolution.note && errorMsg === "") {
    //   // check if additional items have been added
    //   let hasAdditionalItems = true;
    //   for (const [addItemId, addItemData] of currSolution.additional_parts.entries()) {
    //     const orderItem = userOrder.find((item) => item.id === addItemId);

    //     // if the item is not in the order, it means that the order is incorrect
    //     if (!orderItem) {
    //       hasAdditionalItems = false;
    //       break;
    //     }

    //     let amountNeeded = addItemData.amount;
    //     if (currSolution.parts.has(addItemId))
    //       amountNeeded += currSolution.parts.get(addItemId).amount;

    //     // if the item is in the order, check if the quantity is correct
    //     if (orderItem.quantity !== amountNeeded) {
    //       hasAdditionalItems = false;
    //       break;
    //     }
    //   }

    //   if (!hasAdditionalItems) {
    //     errorMsg = `NOTE: ${currSolution.note}`;
    //   }
    // }

    // reset everything if the order is correct
    if (errorMsg === "") {
      nextSolution();
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
