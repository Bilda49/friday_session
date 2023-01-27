let orderCount = 0;

const takeOrder = (topping1, topping2) => {
  console.log(`Pizza with ${topping1} and ${topping2}`);
  orderCount++;
  console.log(`You ordered ${orderCount} pizzas`);
};
orderCount = 0;
takeOrder("pineapple", "tomatoes");
takeOrder("tomatoes", "sausage");
