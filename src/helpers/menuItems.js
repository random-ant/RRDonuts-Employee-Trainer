const ITEM_LITERALS = [
  // id, name, price
  [101, "GLAZED RR", 1.19],
  [102, "CHOCOLATE RR", 1.19],
  [103, "STRAW ICED", 1.19],
  [104, "MAPLE", 1.19],
  [105, "TX GLAZED", 11.98],
  [106, "CHOC SPRINKLED", 1.19],
  [107, "STRAW SPRINKLED", 1.19],
  [108, "SINGLE HOLE", 2.39],
  [109, "TX CHOCOLATE", 11.98],
  [110, "TX 1/2 CHOCOLATE", 11.98],
  [111, "DOZ MIXED DONUTS", 2.99],
  [112, "GRANULATED RR", 0],

  [201, "PLAIN CAKE", 0],
  [202, "CHOCOLATE CAKE", 0],
  [203, "BLUEBERRY CAKE", 0],
  [204, "SPICE CAKE", 0],
  [205, "POWDERED CAKE", 0],
  [206, "CINNAMON SUGAR", 0],
  [207, "DOUBLE CHOC CAKE", 0],
  [208, "CHOC DIP PLAIN CAKE", 0],
  [209, "DOZ MIXED CAKE", 0],
  [210, "*OPEN DONUT*", 0],
  [211, "PUMPKIN CAKE", 0],
  [212, "RED VELVET CAKE", 0],

  

  [401, "CINNAMON TWIST", 0],
  [402, "APPLE FRITTER", 0],

  [501, "CINNAMON ROLL", 0],
  [502, "TX CINN ROLL", 0],
  [503, "BLUEBERRY MUFFIN", 0],
  [504, "BANANA NUT MUFFIN", 0],
  [505, "CREAM CHZ KOLACHE", 0],
  [506, "STRAWBERRY KOLACHE", 0],
  [507, "BLUEBERRY KOLACHE", 0],
  [508, "CHERRY KOLACHE", 0],
  [509, "DOZ MIX FRUIT KOLACHE", 0],
  [510, "PUMPKIN CRM CHZ MUFFIN", 0],

  [701, "WHITE CUPCAKE", 0],
  [701, "CHOC CUPCAKE", 0],
  [701, "OPEN CAKE", 0],
  [701, "PUMPKIN CAKE", 0],
  [701, "PECAN PIE", 0],
  [701, "OPEN CUPCAKE", 0],
  [701, "DELIVERY", 0],
  [701, "UNIFORM PURCHASE", 0],

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
