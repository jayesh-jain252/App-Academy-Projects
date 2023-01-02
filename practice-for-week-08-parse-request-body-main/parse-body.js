function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("=");
  }
  return input;
}

function thirdStep(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j].includes("+")) {
        let splited = input[i][j].split("+");
        input[i][j] = splited.join(" ");
      }
    }
  }
  return input;
}

function fourthStep(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j].includes("%")) {
        input[i][j] = decodeURIComponent(input[i][j]);
      }
    }
  }
  return input;
}

function fifthStep(input) {
  // Your code here
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let el = input[i];
    obj[input[i][0]] = input[i][1];
  }
  return obj;
}

function parseBody(str) {
  // Your code here
  let first_processed = firstStep(str); //remove &
  let second_processed = secondStep(first_processed); //remove =
  let third_processed = thirdStep(second_processed); //remove +
  let forth_processed = fourthStep(third_processed); // remove % encoding
  let final = fifthStep(forth_processed); // convert to obj
  return final;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
