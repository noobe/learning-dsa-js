// Creating objects as literals
let obj = {
  key: 'value'
};

// Creating using Object.create() method
const obj2 = Object.create(obj);

// Creating objects from classes using new
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}
const obj3 = new Person('testFirstNameOne', 'testLastNameOne');

// Create using Object.assign() method
const obj4 = Object.assign({}, obj2, obj3);