let kth = (string, rank) => {
  let obj = {};
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = { char: string[i], times: 0 };
    }
    obj[string[i]]["times"] += 1;
  }
  for (let key of Object.keys(obj)) {
    arr.push(obj[key]);
  }
  arr.sort((a, b) => b.times - a.times);

  return arr[rank - 1].char;
};

// console.log(kth("aaabbc", 1)); //  => 'a'
// console.log(kth("aaabbc", 2)); //  => 'b'
// console.log(kth("aaabbbbbbbc", 3)); //  => 'c'

let newAlphabet = (string, alphabets) => {
  let strToObj = {};
  for (let i = 0; i < string.length; i++) {
    strToObj[string[i]] = i;
  }
  console.log(strToObj);

  let alphToObj = {};
  for (let i = 0; i < alphabets.length; i++) {
    alphToObj[alphabets[i]] = i;
  }
  console.log(alphToObj);
};

newAlphabet("dino", "abcdefghijklmnopqrstuvwxyz"); // => true
newAlphabet("leetcode", "abcdefghijklmnopqrstuvwxyz"); // => false
newAlphabet("leetcod", "labefghijkmnpqrstucvowxdyz"); // => true
