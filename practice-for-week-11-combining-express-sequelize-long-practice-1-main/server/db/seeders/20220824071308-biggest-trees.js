"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * TREE	LOCATION	HEIGHTFT	GROUNDCIRCUMFERENCEFT
1	General Sherman	Sequoia National Park	274.9	102.6
2	General Grant	Kings Canyon National Park	268.1	107.5
    */
    await queryInterface.bulkInsert(
      "Trees",
      [
        {
          tree: "General Sherman",
          location: "Sequoia National Park",
          heightFt: 274.9,
          groundCircumferenceFt: 102.6,
        },
        {
          tree: "General Grant Kings",
          location: "Canyon National Park",
          heightFt: 268.1,
          groundCircumferenceFt: 107.5,
        },
        {
          tree: "President",
          location: "Sequoia National Park	",
          heightFt: 240.9,
          groundCircumferenceFt: 93.0,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Trees",
      {
        tree: ["General Sherman", "General Grant Kings", "President"],
      },
      {}
    );
  },
};
