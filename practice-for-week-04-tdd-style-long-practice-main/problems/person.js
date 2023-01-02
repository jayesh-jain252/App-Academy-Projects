class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
  }

  visit(otherperson) {
    return `${this.name} visited ${otherperson.name}.`;
  }

  switchVisit(otherperson) {
    return otherperson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
      throw new TypeError("obj should be of type object with key value pair");
    }

    if (!("name" in obj) || !("age" in obj)) {
      throw new TypeError("obj should have name and age keys");
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(obj) {
    if (!Array.isArray(obj)) {
      throw new TypeError("obj should be an array of Person instances");
    }

    let hello = [];
    for (let i = 0; i < obj.length; i++) {
      const person = obj[i];
      hello.push(person.sayHello());
    }
    return hello;
  }
}

module.exports = Person;
