export {}; // Makes this file a module with its own scope
// bcoz index.js file is also same so the duplicacy errors dont come

// custom types : start with capital letter convention
type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepproni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderHistory: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (selectedPizza === undefined) {
    console.error(`${pizzaName} doesn't exist in menu`);
    return;
    // return make sure that the code doesnt work if slectedPizza = undefined
  }

  cashInRegister += selectedPizza?.price;

  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);

  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);
  if (order === undefined) {
    console.error(`This order ${order} doesnt exist`);
    return;
  }
  order.status = "completed";
  return order;
}


export function getPizzaDetail(identifier: string | number) : Pizza | undefined{
    if(typeof identifier === "string" ){
      return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }else if(typeof identifier === "number") {
      return menu.find(pizza => pizza.id === identifier)
    }else{
      throw new TypeError("Paramter must either be a string or a number")
    }
}

addNewPizza({ id: 5, name: "Chicken Bacon", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 11 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon");
completeOrder(1);
// now order is {
//   id: 1,
//   pizza: { name: 'Chicken Bacon', price: 12 },
//   status: 'completed'
// }

console.log(menu);
console.log(`cashInRegister is ${cashInRegister}`);
// if u use `` for array or objects then there original value will not return
console.log("Recent order history is ", orderHistory);
console.log(`next order id is ${nextOrderId}`);
console.log("placed order is completed", completeOrder(1));

// Command to run this code : npx tsx index.ts
