// custom types
type Food = string;
let favoruiteFood: Food = "Pizza"

type Address = {
  street: string
    city: string
    country: string
  }

type Person = {
  name: string
  age: number
  isStudent: boolean
  address?: Address /// ? means it is optional
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent : true,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "US"
  }
}

let person2: Person = {
  name: "Jilly",
  age: 34,
  isStudent: false,
}

function displayInfo(person: Person){
  console.log(`Person name is ${person.name} and lives at ${person.address?.street}`)
}

displayInfo(person1)
displayInfo(person2)

let ages = [100,101]
ages.push()

let people : Array<Person> =  [ person1, person2]
console.log(people)


// literal types: provides more precison types than string number boolean etc.
let names: "bob" = "bob"
let direction: "north" | "south" | "east" | "west";
direction = "north";
direction = "east";

// literal and union types

type UserRole = "guest" | "member" | "admin";

let userRole : UserRole = "member"