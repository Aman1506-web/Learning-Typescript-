// // custom types
// type Food = string;
// let favoruiteFood: Food = "Pizza";

// type Address = {
//   street: string;
//   city: string;
//   country: string;
// };

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address?: Address; /// ? means it is optional
// };

// let person1: Person = {
//   name: "Joe",
//   age: 42,
//   isStudent: true,
//   address: {
//     street: "123 Main",
//     city: "Anytown",
//     country: "US",
//   },
// };

// let person2: Person = {
//   name: "Jilly",
//   age: 34,
//   isStudent: false,
// };

// function displayInfo(person: Person) {
//   console.log(
//     `Person name is ${person.name} and lives at ${person.address?.street}`
//   );
// }

// displayInfo(person1);
// displayInfo(person2);

// let ages = [100, 101];
// ages.push();

// let people: Array<Person> = [person1, person2];
// console.log(people);

// // literal types: provides more precison types than string number boolean etc.
// let names: "bob" = "bob";
// let direction: "north" | "south" | "east" | "west";
// direction = "north";
// direction = "east";

// literal and union types

type UserRole = "guest" | "member" | "admin" | "contributor";

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;
// will make all fields of user as optional

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_doe", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with. username ${username} not found`);
  }
  return user;
}

function updateUser(id: number, updates: UpdatedUser) {
  // Find user
  const user = users.find((user) => user.id === id);

  if (user === undefined) {
    console.error("This user doesnt exist");
    return;
  }

  const updatedUser = Object.assign(user, updates);
  return updatedUser;
}

// omit : removes the id type from User custom type so that is the type for newUser
function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
}

addNewUser({ username: "aman1", role: "contributor" });
updateUser(3, { role: "contributor" });
console.log(users);
// let value: any = 1;
// value = "aman";
// value = true;
// value.toLowerCase();
