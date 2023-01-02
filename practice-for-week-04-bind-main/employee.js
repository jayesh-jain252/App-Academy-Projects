// Your code here
class Employee {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  hello;

  sayName() {
    console.log(`${this.name} says hello`);
  }

  sayOccupation() {
    console.log(`${this.name} is a ${this.occupation}`);
  }
}

module.exports = Employee;
