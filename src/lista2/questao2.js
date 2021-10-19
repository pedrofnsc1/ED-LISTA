import Stack from '../stack';

export default class twoStackOneQueue {
  constructor(length = 5) {
    this.firstStack = new Stack(length);
    this.secondStack = new Stack(length);
  }

  enqueue(newData) {
    if (!this.isFull()) {
      this.firstStack.push(newData);
    } else {
      throw new Error("queue overflow");
    }
  };

  dequeue() {
    if (!this.isEmpty()) {
      let counter = this.firstStack.length();
      for (let i = 0; i < counter - 1; i++) {
        this.secondStack.push(this.firstStack.pop());
      }
    } else {
      throw new Error("queue underflow");
    }
    let result = this.firstStack.pop();
    let counter = this.secondStack.length();
    for (let i = 0; i < counter; i++) {
      this.firstStack.push(this.secondStack.pop());
    }
    return result;
  };

  front() {
    if (!this.isEmpty()) {
      let counter = this.firstStack.length();
      for (let i = 0; i < counter - 1; i++) {
        this.secondStack.push(this.firstStack.pop());
      }
      let result = this.firstStack.topItem();
      counter = this.secondStack.length();
      for (let i = 0; i < counter; i++) {
        this.firstStack.push(this.secondStack.pop());
      }
      return result;
    } else {
      throw new Error("queue is empty");
    }
  };

  length() {
    return this.firstStack.length();
  };

  isEmpty() {
    return this.firstStack.isFull();
  };

  isFull() {
    return this.firstStack.isFull();
  };

  clear() {
    return this.firstStack.clear();
  };

  toString() {
    return this.firstStack.toString();
  };
}