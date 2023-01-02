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

  unshift(val) {
    // Your code here
    let i = this.data.length;
    while (i-- > 0) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
  }
}

module.exports = DynamicArray;
