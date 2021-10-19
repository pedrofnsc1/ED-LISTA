export default class circularQueue {
  constructor(length = 5) {
    this.maxLength = length;
    this.data = [];
    this.beginning = 1;
    this.end = 1;
  }

  enqueue(newData) {
    if (this.isFull()) {
      throw new Error("queue overflow");
    } else {
      this.data[this.end] = newData;
      if (this.end === this.maxLength) {
        this.end = 0;
      } else {
        this.end += 1;
      }
    }
  }

  dequeue() {

    if (this.isEmpty()) {
      throw new Error("queue underflow");
    } else {
      let result = this.data[this.beginning];
      if (this.beginning === this.maxLength) {
        this.beginning = 0;
      } else {
        this.beginning += 1;
      }
      return result
    }
  }

  length() {
    if (this.isEmpty()) {
      return 0
    } else if (this.beginning < this.end) {
      return this.end - this.beginning;
    } else {
      return this.maxLength - this.beginning + this.end + 1;
    }
  }
  front() {
    if (this.isEmpty()) {
      throw new Error('queue is empty');
    } else {
      return this.data[this.beginning];
    }
  }
  isEmpty() {
    return this.beginning === this.end;
  }
  isFull() {
    return this.beginning === this.end + 1;
  }
  clear() {
    this.beginning = 0;
    this.end = 0;
  }
}

