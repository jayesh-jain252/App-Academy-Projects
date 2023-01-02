// Your code here
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;
const Person = require("../problems/person");

describe("Person class", () => {
  let person;
  let person2;

  beforeEach(() => {
    person = new Person("kristen", 38);
    person2 = new Person("mai", 29);
  });

  describe("Person constructor", () => {
    it("should set the name property", () => {
      expect(person).to.have.property("name");
      expect(person.name).to.eql("kristen");
    });

    it("should set the age property", () => {
      expect(person).to.have.property("age");
      expect(person.age).to.eql(38);
    });
  });

  describe("introduce instance method", () => {
    it("should call the introduce method", () => {
      let introduction = person.sayHello();
      let expected = `Hi, I'm kristen, and I'm 38 years old.`;
      expect(introduction).to.eql(expected);
    });
  });

  describe("visit(otherperson) instance method", () => {
    it("should call the visit instance method", () => {
      let visited = person.visit(person2);
      let expected = `kristen visited mai.`;
      expect(visited).to.eql(expected);
    });
  });

  describe("switchVisit(otherperson) instance method", () => {
    it("should call the switchVisit instance method", () => {
      let switchVisited = person.switchVisit(person2);
      let expected = `mai visited kristen.`;
      expect(switchVisited).to.eql(expected);
    });
  });

  describe("update(obj) instance method", () => {
    it("should update the current person with data from obj", () => {
      let coolPerson = new Person("mai", 32);
      coolPerson.update({ name: "Hellen", age: 40 });
      let coolPerson2 = new Person("Arnold", 32);
      coolPerson2.update({ name: "Steven", age: 40, lname: "Spilberg" });
      expect(coolPerson.name).to.eql("Hellen");
      expect(coolPerson.age).to.eql(40);
      expect(coolPerson2.name).to.eql("Steven");
      expect(coolPerson2.age).to.eql(40);
    });

    it("should through error if obj is not of type object", () => {
      let coolPerson = new Person("mai", 32);
      expect(() => coolPerson.update("hello")).to.throw(TypeError);
    });

    it("should through error if obj does not contains name and age key", () => {
      let coolPerson = new Person("mai", 32);

      expect(() =>
        coolPerson.update({ fname: "Hellen", lname: "Keller" })
      ).to.throw(TypeError);
    });
  });

  describe("tryUpdate(obj) instance method", () => {
    it("should return true and update the current instance if no error is thrown", () => {
      let coolPerson = new Person("mai", 32);
      let trial = coolPerson.tryUpdate({ name: "Hellen", age: 40 });
      expect(trial).to.be.true;
      expect(coolPerson.name).to.eql("Hellen");
      expect(coolPerson.age).to.eql(40);
    });

    it("should return false if error is thrown by update instance method", () => {
      let coolPerson = new Person("mai", 32);
      let trial = coolPerson.tryUpdate("hello");
      expect(trial).to.be.false;
    });
  });

  describe("greetAll(obj) static method", () => {
    it("should return array of result of sayHello() instance method on all instances of obj array", () => {
      let coolPerson = new Person("mai", 32);
      let coolPerson2 = new Person("Arnold", 32);
      let obj = [coolPerson, coolPerson2];
      let hello = Person.greetAll(obj);
      let expected = [
        `Hi, I'm mai, and I'm 32 years old.`,
        `Hi, I'm Arnold, and I'm 32 years old.`,
      ];
      expect(hello).deep.to.eql(expected);
    });

    it("should through error if obj is not of type array", () => {
      expect(() =>
        Person.greetAll({ fname: "Hellen", lname: "Keller" })
      ).to.throw(TypeError);
    });
  });
});
