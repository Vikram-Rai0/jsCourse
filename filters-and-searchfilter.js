// const numbers = [1, 2, 3, 4, 5, 6];

// // Get even numbers
// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4, 6]


// const fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange"];

// const search = "ap"; 

// // Case-insensitive search filter
// const result = fruits.filter(fruit => 
//   fruit.toLowerCase().includes(search.toLowerCase())
// );

// console.log(result); // ["Apple", "Grapes"]


const users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Alice Johnson", age: 28 },
];

const search = "Jane";

const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(search.toLowerCase())
);

console.log(filteredUsers);
// [{ id: 2, name: "Jane Smith", age: 30 }]
