const ITEM_LITERALS = [
  // id, name, price
  [1, "GLAZED RR", 2.99],
  [2, "CHOCOLATE RR", 2.99],
  [3, "STRAW ICED", 2.99],
  [4, "MAPLE", 2.99],
  [5, "TX GLAZED", 2.99],
  [6, "CHOC SPRINKLED", 2.99],
  [7, "STRAW SPRINKLED", 2.99],
  [8, "SINGLE HOLE", 2.99],
  [9, "TX CHOCOLATE", 2.99],
  [10, "TX 1/2 CHOCOLATE", 2.99],
  [11, "DOZ MIXED DONUTS", 2.99],
  [12, "GRANULATED RR", 2.99],
];

const MENU_ITEMS = new Array(64);
for (const lit of ITEM_LITERALS) {
  const obj = {
    item_id: lit[0],
    display_name: lit[1],
    price: lit[2],
  };
  MENU_ITEMS[obj.item_id] = obj;
}

function getItem(itemID) {
  return MENU_ITEMS[itemID];
}

export default getItem;
