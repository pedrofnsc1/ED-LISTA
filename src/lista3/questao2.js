import Lista from './../../src/lista';

export default class filaDinamica {
  constructor() {
    this.dado = new Lista();
  }

  enqueue(novoDado) {
    return this.dado.append(novoDado);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('queue underflow');
    } else {
      return this.dado.removeFirst();
    }
  }

  front() {
    return this.dado.getPosition(0);
  }

  isEmpty() {
    return this.length() === 0 ? true : false;
  }

  length() {
    return this.dado.length();
  }

  clear() {
    this.dado.clear();
  }

  toString() {
    return this.dado.toString();
  }
}