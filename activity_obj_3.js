const coffeeShop = {
  branch: "Main Street",
  placeDrink: ["coffee", "tea", "latte"],
  placeFood: ["croissant", "muffin", "bagel"],
  drinksOrdered: (drink) => {
    return `Your order is ${placeDrink[drink]}`;
  },
  foodOrdered: (foods) => {
    return `Your order is ${placeFood[foods]}`;
  },
};
console.log(drinksOrdered(2), foodOrdered(1));
