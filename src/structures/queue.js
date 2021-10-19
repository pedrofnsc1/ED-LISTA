export default class Queue {
    constructor(length = 5) {
        this.maxLength = length;
        this.data = [];
        this.beginning = 0;
        this.end = 0;
    }
    enqueue(newData) {
        if (!this.isFull()) {
            return this.data[this.end++] = newData;
        } else {
            throw new Error('queue overflow');
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('queue underflow');
        } else {
            /*
            my beginning will implement and 
            now my beginning gonna be the next
            item in my array 
            */
            this.beginning++;
        }
    }
    front() {
        if (this.isEmpty()) {
            throw new Error('queue underflow');
        } else {
            return this.data[this.beginning];
        }
    }
    length() {
        return this.end - this.beginning;
    }

    isFull() {
        return this.maxLength === this.end;
    }

    isEmpty() {
        if (this.length() === 0) {
            return true;
        } else {
            return false
        }
    }

    clear() {
        this.beginning = 0;
        this.end = 0;
    }
}

// export default class fila {

//     constructor(tamanho = 10) {
//         this.dado = [];
//         this.inicioFila = 0;
//         this.fimFila = 0;
//         this.tamanho = tamanho;
//     }
//     enqueue(novoDado) {

//         if (this.isFull()) {
//             throw new Error("queue overflow");
//         } else {
//             return this.dado[this.fimFila++] = novoDado;
//         };

//     };
//     dequeue() {

//         if (this.isEmpty()) {
//             throw new Error("queue underflow");
//         } else {
//             return this.dado[this.inicioFila++];
//         };

//     };
//     front() {

//         if (!this.isEmpty()) {
//             return this.dado[this.inicioFila];
//         } else {
//             throw new Error("queue underflow");
//         }

//     };
//     isEmpty() {

//         if (this.length() == 0) {
//             return true;
//         } else {
//             return false;
//         };

//     };
//     isFull() {
//         return this.length() === this.tamanho;
//     };
//     length() {
//         return this.fimFila - this.inicioFila;
//     };
//     clear() {
//         this.inicioFila = 0;
//         this.fimFila = 0;
//     };
// }