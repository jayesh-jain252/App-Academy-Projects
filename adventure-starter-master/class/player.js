const { Food } = require("./food");
let Item = require("./item");
let Room = require("./room");

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let item = this.currentRoom.getItemByName(itemName);
    this.currentRoom.items.splice(this.currentRoom.items.indexOf(item), 1);
    this.items.push(item);
  }

  dropItem(itemName) {
    // Fill this in
    let item = this.getItemByName(itemName);
    let room = this.currentRoom;
    room.items.push(item);
    this.items.splice(this.items.indexOf(item), 1);
  }

  eatItem(itemName) {
    // Fill this in
    let item = this.getItemByName(itemName);
    if (item instanceof Food) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }

  getItemByName(name) {
    // Fill this in
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name === name) {
        return item;
      }
    }
  }
}

module.exports = {
  Player,
};
