import Lista from "./../lista";

export default class PilhaDinamica {
  constructor() {
    this.dado = new Lista();
  }

  push(dado) {
    this.dado.append(dado);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("stack underflow");
    } else {
      this.dado.removeLast();
    }
  }

  top() {
    return this.dado.last();
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  size() {
    return this.dado.length();
  }

  clear() {
    this.dado.clear();
  }

  toString() {
    return this.dado.toString();
  }



}
