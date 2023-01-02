// Convert the integers in the console.logs below to base 2

/******************************************************************************/
const ishex = (code) => {
  if (typeof code === "string" && code[1] === "x") {
    return true;
  }
  return false;
};

const digitTobase10 = (digit, base, exponent) => {
  return digit * base ** exponent;
};

const convertToBase10 = (str) => {
  let strVal = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let strToConvert = str.slice(2);
  let base10 = 0;
  for (let i = 0; i < strToConvert.length; i++) {
    if (strToConvert[i] in strVal) {
      base10 += digitTobase10(
        strVal[strToConvert[i]],
        16,
        strToConvert.length - 1 - i
      );
    } else {
      base10 += digitTobase10(
        Number(strToConvert[i]),
        16,
        strToConvert.length - 1 - i
      );
    }
  }
  return base10;
};
const convertToBase2 = (element) => {
  // Your code here
  if (ishex(element)) {
    return convertToBase2(convertToBase10(element));
  }
  if (element === 0) {
    return "0b";
  }
  return convertToBase2(Math.floor(element / 2)) + String(element % 2);
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log("––––––");

console.log(convertToBase2("0xf")); // 0b1111
console.log(convertToBase2("0xfa")); // 0b11111010
console.log(convertToBase2("0x1234")); // 0b1001000110100
console.log(convertToBase2("0xc9a1")); // 0b1100100110100001
console.log(convertToBase2("0xbf12")); // 0b1011111100010010
