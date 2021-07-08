export default class circular {

  constructor(tamanho) {
    this.tamanho = tamanho;
    this.dados = [];
    this.inicioFila = 1;
    this.fimFila = 1;
  }

  enqueue(novoDado) {
    if (this.isFull()) {
      throw new Error("stack overflow");
    } else {
      this.dados[this.fimFila] = novoDado;
      if (this.fimFila === this.tamanho) {
        this.fimFila = 0;
      } else {
        this.fimFila += 1;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("stack underflow");
    } else {
      let resultado = this.dados[this.inicioFila];
      if (this.inicioFila === this.tamanho) {
        this.inicioFila = 0;
      } else {
        this.inicioFila = this.inicioFila + 1;
      }
      return resultado;
    }
  }
  front() {
    if (!this.isEmpty()) {
      return this.dados[this.inicioFila];
    }
  }
  size() {
    if (this.isEmpty()) {
      return 0;
    } else if (this.inicioFila < this.fimFila) {
      return this.fimFila - this.inicioFila;
    } else {
      return this.tamanho - this.inicioFila + this.fimFila + 1;
    }
  };
  isFull() {
    return this.inicioFila === this.fimFila + 1;
    //return -> 0 - 1 || 1 - 2 | 2 - 3;
  };
  isEmpty() {
    return this.inicioFila === this.fimFila;
    //return -> 0 - 0 || 1 - 1 || 2 - 2;
  };
  clear() {
    this.inicioFila = 0;
    this.fimFila = 0;
  };
  toString() {
    let resultado = "[";
    if (this.inicioFila <= this.fimFila) {
      for (let i = this.inicioFila; i <= this.fimFila; i++) {
        resultado += ` ${this.dados[i]} `;
      }
    } else {
      for (let i = this.inicioFila; i < this.tamanho; i++) {
        resultado += ` ${this.dados[i]} `;
      }
      for (let i = 0; i <= this.fimFila; i++) {
        resultado += ` ${this.dados[i]} `;
      }
    }
    resultado += "]";
    console.log(resultado)
    return resultado;
  };
}