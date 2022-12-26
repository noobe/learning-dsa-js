arr = [
  { userId: 1, userName: 'Alice', rating: 3.5 },
  { userId: 2, userName: 'Bob', rating: 1.5 },
  { userId: 3, userName: 'Laurey', rating: 2 },
  { userId: 4, userName: 'Jack', rating: 3 },
  { userId: 5, userName: 'Peter', rating: 2.5 },
  { userId: 6, userName: 'John', rating: 4.5 },
  { userId: 7, userName: 'Jim', rating: 5 },
];

// Get an array of userNames
const res1 = arr.map(user => user.userName);

// Get all users records with rating above 3
const res2 = arr.filter(user => user.rating > 3);

// Find the average user ratings of all existing users
const res3 = arr.reduce((acc, user) => acc+user.rating, 0)/arr.length;

// Find the user with name Bob
const res4 = arr.find(user => user.userName === 'Bob');

//Check if every user has a valid rating above 0
const res5 = arr.every(user => Object.hasOwnProperty(user, 'rating') && user.rating > 0);

// Find if there is any user by the name Jon
const res6 = arr.map(item => item.userName).includes("Jon");

// Find if there is atleast one user with Rating greater than 3.
const res7 = arr.some(item => item.rating > 3);