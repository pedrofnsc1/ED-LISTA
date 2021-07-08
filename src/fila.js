export default class fila {

    constructor(tamanho = 10) {
        this.dado = [];
        this.inicioFila = 0;
        this.fimFila = 0;
        this.tamanho = tamanho;
    }
    enqueue(novoDado) {

        if (this.isFull()) {
            throw new Error("queue overflow");
        } else {
            return this.dado[this.fimFila++] = novoDado;
        };

    };
    dequeue() {

        if (this.isEmpty()) {
            throw new Error("queue underflow");
        } else {
            return this.dado[this.inicioFila++];
        };

    };
    front() {

        if (!this.isEmpty()) {
            return this.dado[this.inicioFila];
        } else {
            throw new Error("queue underflow");
        }

    };
    isEmpty() {

        if (this.size() == 0) {
            return true;
        } else {
            return false;
        };

    };
    isFull() {
        return this.size() === this.tamanho;
    };
    size() {
        return this.fimFila - this.inicioFila;
    };
    clear() {
        this.inicioFila = 0;
        this.fimFila = 0;
    };
}