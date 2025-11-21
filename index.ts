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

let cashInRegister = 100;
const orderHistory: Order[] = [];
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepproni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { id: nextPizzaId++, ...pizzaObj };
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
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

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  if (order === undefined) {
    console.error(`This order ${order} doesnt exist`);
    return;
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Paramter must either be a string or a number");
  }
}

// Generics Type
function addToArray<Type>(array: Type[], item: Type): Type[] {
  array.push(item);
  return array;
}

addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken tikka", price: 20 });
// explicit type for order history so TS knows that status is a union of ordered or completed
addToArray<Order>(orderHistory, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

addNewPizza({ name: "Chicken Bacon", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 11 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
addNewPizza({ name: "Cheese Corn", price: 14 });

placeOrder("Chicken Bacon");
completeOrder(1);
// now order is {
//   id: 1,
//   pizza: { name: 'Chicken Bacon', price: 12 },
//   status: 'completed'
// }

console.log(menu);
// console.log(`cashInRegister is ${cashInRegister}`);
// // if u use `` for array or objects then there original value will not return
// console.log("Recent order history is ", orderHistory);
// console.log(`next order id is ${nextOrderId}`);
// console.log("placed order is completed", completeOrder(1));

// Command to run this code : npx tsx index.ts
