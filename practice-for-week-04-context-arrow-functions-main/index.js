const User = require("./classes/user");

const michelle = new User("Michelle");

let greetAfterNameChange = (changeName, newName) => {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
};

greetAfterNameChange(michelle.changeName, "Elle");
// should print out: Hi my name is Elle
