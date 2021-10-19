export default class deque {
  constructor(length = 10) {
    this.maxLength = length;
    this.data = [];
    this.beginning = 0;
    this.end = 0;
  };

  addBack(newData) {
    if (!this.isFull()) {
      this.data[this.end++] = newData;
    } else {
      throw new Error("deque is empty");
    }
  }
  addStart(newData) {
    if (this.isEmpty()) {
      this.addBack(newData);
    } else if (this.beginning > 0) {
      this.data[--this.beginning] = newData;
    } else {
      return 'deque is empty';
    }
  }
  removeStart() {
    if (this.isEmpty()) {
      throw new Error("deque is empty");
    } else {
      this.beginning++;
    }
  }
  removeBack() {
    if (this.isFull()) {
      throw new Error("deque is empty");
    } else {
      this.data[this.end--];
    }
  }
  frontItem() {
    if (this.isEmpty()) {
      throw new Error('deque is empty');
    } else {
      return this.data[this.beginning];
    }
  }

  backItem() {
    if (this.isEmpty()) {
      throw new Error('deque is empty');
    } else {
      return this.data[this.end - 1];
    }
  }

  isEmpty() {
    return this.beginningA === 0 && this.beginningB === this.maxLength;
  }

  isFull() {
    return (this.endA - this.beginningA) === this.maxLength &&
      (this.endB - this.beginningB) === this.maxLength;
  }

  clear() {
    this.beginningA = this.endA;
    this.beginningB = this.endB;
  }

  toString() {
    let result = "["
    for (let i = this.beginning + 1; i < this.end; i++) {
      result += `${this.data[i]} -> `;
    }
    result += "]"
    return result;
  }
}