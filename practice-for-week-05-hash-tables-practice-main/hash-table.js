const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  static toInteger(hex_str) {
    let strVal = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    };
    let strToConvert = hex_str;
    let base10 = 0;
    for (let i = 0; i < strToConvert.length; i++) {
      if (strToConvert[i] in strVal) {
        base10 += strVal[strToConvert[i]] * 16 ** (strToConvert.length - 1 - i);
      } else {
        base10 += Number(strToConvert[i]) * 16 ** (strToConvert.length - 1 - i);
      }
    }
    return base10;
  }

  hash(key) {
    // Your code here
    let hashed = sha256(key);
    let first8 = hashed.slice(0, 8);

    let convertedToNumber = HashTable.toInteger(first8);
    return convertedToNumber;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let insertionData = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (this.data[index] !== null) {
      throw new Error("hash collision or same key/value pair already exists!");
    }
    this.data[index] = insertionData;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let insertionData = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (this.data[index] !== null) {
      insertionData.next = this.data[index];
      this.data[index] = insertionData;
      this.count++;
    } else {
      this.data[index] = insertionData;
      this.count++;
    }
  }

  static isKeyPresent(data, key) {
    while (data) {
      if (data.key === key) {
        return true;
      }
      data = data.next;
    }
    return false;
  }

  static changeValue(data, key, value) {
    while (data) {
      if (data.key === key) {
        data.value = value;
      }
      data = data.next;
    }
  }
  insert(key, value) {
    // Your code here
    let insertionData = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (
      this.data[index] !== null &&
      !HashTable.isKeyPresent(this.data[index], key)
    ) {
      insertionData.next = this.data[index];
      this.data[index] = insertionData;
      this.count++;
    } else if (HashTable.isKeyPresent(this.data[index], key)) {
      console.log("inserting with same key", key, value);
      HashTable.changeValue(this.data[index], key, value);
    } else {
      this.data[index] = insertionData;
      this.count++;
    }
  }
}

module.exports = HashTable;
