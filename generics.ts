const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen"]
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

// if we do without generic type then we will have. to make a separate function type for all types like number[], string[], object[]
// One function works for all types
function getLastItem<Type>(array: Type[]): Type | undefined{
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))      // Type = number
console.log(getLastItem(favoriteThings))  // Type = string  
console.log(getLastItem(voters))          // Type = object