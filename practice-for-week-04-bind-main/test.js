// Your code here
let Employee = require("./employee");
let john = new Employee("John Wick", "Dog Lover");

const johnSays = john.sayName.bind(john);
setTimeout(johnSays, 2000);

const occupation = john.sayOccupation.bind(john);
setTimeout(occupation, 2000);
