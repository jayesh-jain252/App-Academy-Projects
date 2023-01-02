class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
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
    // if (this.count === this.capacity) {
    //   this.resize();
    // }
    let insertionData = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    let KeyExists = HashTable.isKeyPresent(this.data[index], key);

    if (this.data[index] !== null && !KeyExists) {
      insertionData.next = this.data[index];
      this.data[index] = insertionData;
      this.count++;
    } else if (KeyExists) {
      HashTable.changeValue(this.data[index], key, value);
    } else {
      this.data[index] = insertionData;
      this.count++;
    }
  }

  static findValueFromKey(data, key) {
    while (data) {
      if (data.key === key) {
        return data.value;
      }
      data = data.next;
    }
  }

  read(key) {
    // Your code here
    let index = this.hashMod(key);
    if (this.data[index] !== null && this.data[index].key === key) {
      return this.data[index].value;
    } else if (HashTable.isKeyPresent(this.data[index], key)) {
      return HashTable.findValueFromKey(this.data[index], key);
    }
  }

  resize() {
    // Your code here
    this.capacity *= 2;
    let newData = [];
    for (let i = 0; i < this.data.length; i++) {
      // console.log(this.data[i]);
      if (this.data[i] !== null) newData.push(this.data[i]);
    }
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for (let i = 0; i < newData.length; i++) {
      let element = newData[i];
      while (element !== null) {
        // console.log(element);
        // console.log(element.key, element.value);
        this.insert(element.key, element.value);
        element = element.next;
      }
    }
  }

  static deleteFromKey(data, key) {
    while (data) {
      if (data.key === key) {
        data.key = undefined;
        data.value = undefined;
        return;
      }
      data = data.next;
    }
  }

  delete(key) {
    // Your code here
    let index = this.hashMod(key);
    if (!HashTable.isKeyPresent(this.data[index], key)) {
      return "Key not found";
    }
    if (this.data[index] !== null && this.data[index].key === key) {
      this.data[index].key = undefined;
      this.data[index].value = undefined;
      this.count--;
    } else if (HashTable.isKeyPresent(this.data[index], key)) {
      HashTable.deleteFromKey(this.data[index], key);
      this.count--;
    }
  }
}

module.exports = HashTable;
