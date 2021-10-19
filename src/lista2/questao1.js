import Queue from '../queue';

export default class twoQueueOneStack {
  constructor(length = 10) {
    this.firstQueue = new Queue(length);
    this.secondQueue = new Queue(length);
  }

  push(newData) {
    if (!this.firstQueue.isFull()) {
      this.firstQueue.enqueue(newData);
    } else {
      throw new Error("stack overflow");
    }
  }

  pop() {
    let counter = this.firstQueue.length();
    if (!this.firstQueue.isEmpty()) {
      for (let i = 0; i < counter - 1; i++) {
        this.secondQueue.enqueue(this.firstQueue.dequeue());
      }
    } else {
      throw new Error("stack underflow");
    }
    counter = this.firstQueue.length();
    for (let i = 0; i < counter; i++) {
      this.firstQueue.enqueue(this.secondQueue.dequeue());
    }
    return this.firstQueue.dequeue();
  }

  front() {
    if (!this.isEmpty()) {
      let counter = this.firstQueue.length();
      for (let i = 0; i < cont - 1; i++) {
        this.secondQueue.enqueue(this.firstQueue.dequeue());
      }
      let result = this.firstQueue.front();
      counter = this.secondQueue.length();
      for (let i = 0; i < counter; i++) {
        this.firstQueue.enqueue(this.secondQueue.dequeue());
      }
      return result;
    } else {
      throw new Error("Fila vazia!");
    }
  }

  length() {
    return this.firstQueue.length();
  }

  isEmpty() {
    return this.firstQueue.isEmpty();
  }

  isFull() {
    return this.firstQueue.isFull();
  }


}