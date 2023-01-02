function selectNum(param1, param2, type) {
  if (type === "BIGGER") {
    if (param1 > param2) {
      return param1;
    } else {
      return param2;
    }
  } else if (type === "SMALLER") {
    if (param1 < param2) {
      return param1;
    } else {
      return param2;
    }
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return selectNum(num1, num2, "BIGGER") * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return selectNum(num1, num2, "BIGGER") / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${selectNum(sum1, sum2, "BIGGER")} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${selectNum(
    weight1,
    weight2,
    "SMALLER"
  )} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
