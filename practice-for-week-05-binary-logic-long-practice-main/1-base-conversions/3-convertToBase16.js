// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const isbinary = (element) => {
  if (typeof element === "string" && element[1] === "b") {
    return true;
  }
  return false;
};
const digitTobase10 = (digit, base, exponent) => {
  return digit * base ** exponent;
};
const convertToBase10 = (str) => {
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
};
const convertToBase16 = (element) => {
  // Your code here
  let strVal = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  if (isbinary(element)) {
    return convertToBase16(convertToBase10(element));
  }
  if (element === 0) {
    return "0x";
  }
  return (
    convertToBase16(Math.floor(element / 16)) +
    (Object.values(strVal).indexOf(element % 16) > -1
      ? Object.keys(strVal).find((key) => strVal[key] === element % 16)
      : String(element % 16))
  );
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log("––––––");

console.log(convertToBase16("0b1100")); // 0xc
console.log(convertToBase16("0b0101")); // 0x5
console.log(convertToBase16("0b1000")); // 0x8
console.log(convertToBase16("0b0111")); // 0x7

console.log("––––––");

console.log(convertToBase16("0b10100101")); // 0xa5
console.log(convertToBase16("0b11111111")); // 0xff
console.log(convertToBase16("0b01010101")); // 0x55
console.log(convertToBase16("0b00110011")); // 0x33
