export default class Pilha {
    constructor(size = 10) {
        this.maxSize = size;
        this.dados = [];
        this.topo = -1;
    };

    push(novoDado) {
        if (this.isFull()) {
            throw new Error("stack overflow");
        }
        else {
            this.dados[++this.topo] = novoDado;
        }
    };

    pop() {
        if (this.isEmpty()) {
            throw new Error("stack underflow");
        } else {
            return this.dados[this.topo--];
        }
    };

    top() {
        if (this.isEmpty()) {
            return "Pilha vazia";
        }
        return this.dados[this.topo];
    };

    size() {
        return this.topo + 1;
    };

    isEmpty() {
        return this.size() === 0;
    };

    isFull() {
        return this.size() === this.maxSize;
    };

    clear() {
        this.topo = -1;
    };

    toString() {
        let result = "[";
        for (let i = 0; i <= this.topo; i++) {
            result += ` ${this.dados[i]} `;
        }
        result += "]";
        return result;
    }
}