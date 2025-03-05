const ITEM_LITERALS = [
  // id, name, price
  [101, "GLAZED RR", 2.99],
  [102, "CHOCOLATE RR", 2.99],
  [103, "STRAW ICED", 2.99],
  [104, "MAPLE", 2.99],
  [105, "TX GLAZED", 2.99],
  [106, "CHOC SPRINKLED", 2.99],
  [107, "STRAW SPRINKLED", 2.99],
  [108, "SINGLE HOLE", 2.99],
  [109, "TX CHOCOLATE", 2.99],
  [110, "TX 1/2 CHOCOLATE", 2.99],
  [111, "DOZ MIXED DONUTS", 2.99],
  [112, "GRANULATED RR", 2.99],
];

const MENU_ITEMS = {};
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
