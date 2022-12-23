let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c'];

arr1.push(6);
console.log(arr1);

arr1.pop();

arr1.concat(10, 11);
arr1.concat(arr2);
console.log([...arr1, ...arr2]);

