import { getPizzaDetail } from ".";

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepproni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if(!selectedPizza){
    console.error(`${pizzaName} doesn't exist in menu`)
    return
  }

  cashInRegister += selectedPizza.price;

  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);

  return newOrder;
}

function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  if(order === undefined){
    console.error(`this order doesnt exist`)
    return
  }
  order.status = "completed";
  return order;
}

addNewPizza({ pizza: "Chicken Bacon", price: 12 });
addNewPizza({ pizza: "BBQ Chicken", price: 11 });
addNewPizza({ pizza: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon")
completeOrder(2)

console.log(menu)
console.log(`cashInRegister is ${cashInRegister}`)
console.log(`Order queue is ${orderQueue}`)
console.log(`next order id is ${nextOrderId}`)
console.log(getPizzaDetail("Veggie"))
