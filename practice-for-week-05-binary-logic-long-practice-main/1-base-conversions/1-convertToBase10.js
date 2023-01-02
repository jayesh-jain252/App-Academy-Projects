// Convert the integers in the console.logs below to base 10:

/******************************************************************************/
const digitTobase10 = (digit, base, exponent) => {
  return digit * base ** exponent;
};
const convertToBase10 = (str) => {
  // Your code here
  if (str[1] === "b") {
    let strToConvert = str.slice(2);
    let base10 = 0;
    for (let i = 0; i < strToConvert.length; i++) {
      base10 += digitTobase10(
        Number(strToConvert[i]),
        2,
        strToConvert.length - 1 - i
      );
    }
    return base10;
  } else {
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
  }
};

/******************************************************************************/

console.log(convertToBase10("0b1100")); // 12
console.log(convertToBase10("0b0101")); // 5
console.log(convertToBase10("0b1000")); // 8
console.log(convertToBase10("0b0111")); // 7

console.log("––––––");

console.log(convertToBase10("0b10100101")); // 165
console.log(convertToBase10("0b11111111")); // 255
console.log(convertToBase10("0b01010101")); // 85
console.log(convertToBase10("0b00110011")); // 51

console.log("––––––");

console.log(convertToBase10("0xf")); // 15
console.log(convertToBase10("0xfa")); // 250
console.log(convertToBase10("0x1234")); // 4660
console.log(convertToBase10("0xc9a1")); // 51617
console.log(convertToBase10("0xbf12")); // 48914
