class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    let i = this.length;
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[i] = val;
    this.length++;
    return this.length;
  }

  pop() {
    // Your code here
    let i = this.length - 1;
    let last = this.data[i];
    this.data[i] = undefined;
    this.length--;
    return last;
  }

  shift() {
    // Your code here
    let i = 0;
    let first = this.data[i];
    while (i++ < this.data.length) {
      this.data[i - 1] = this.data[i];
    }
    this.length--;
    return first;
  }

  unshift(val) {
    // Your code here
    let i = this.data.length;
    if (this.length === this.capacity) {
      this.resize();
    }
    while (i-- > 0) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
    return this.length;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    // Your code here
    this.capacity = this.capacity * 2;
    let newArray = new Array(this.capacity);
    for (let i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
  }
}

module.exports = DynamicArray;

let dynamicArr = new DynamicArray();
console.log(dynamicArr.data.length);
dynamicArr.push(1);
dynamicArr.push(2);

console.log(dynamicArr.length);
dynamicArr.shift();

console.log(dynamicArr.data);
