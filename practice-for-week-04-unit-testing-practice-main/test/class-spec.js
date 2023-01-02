const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let airplane;

    beforeEach(() => {
      airplane = new Word("Aeroplane");
    });
    it('should have a "word" property', function () {
      expect(airplane.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(airplane.word).to.equal("Aeroplane");
    });
  });

  describe("removeVowels function", function () {
    let airplane;

    beforeEach(() => {
      airplane = new Word("Aeroplane");
    });

    it("should return a the word with all vowels removed", function () {
      expect(airplane.removeVowels()).to.equal("rpln");
    });
  });

  describe("removeConsonants function", function () {
    let airplane;

    beforeEach(() => {
      airplane = new Word("Aeroplane");
    });

    it("should return the word with the consonants removed", function () {
      expect(airplane.removeConsonants()).to.equal("Aeoae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let airplane = new Word("Aeroplane");
      expect(airplane.pigLatin()).to.equal("Aeroplaneyay");
    });
    it("should return the word not starting with vowel converted to pig latin", function () {
      let test = new Word("Hello");
      expect(test.pigLatin()).to.equal("elloHay");
    });
  });
});
