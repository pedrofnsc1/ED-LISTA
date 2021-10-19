export default class Stack {
    constructor(length = 20) {
        this.maxlength = length;
        this.data = [];
        this.top = -1;
    };

    push(newData) {
        if (!this.isFull()) {
            this.data[this.top++] = newData
        } else {
            throw new Error("stack overflow");
        }
    };

    pop() {
        if (!this.isEmpty()) {
            return this.top--;
        } else {
            throw new Error("stack underflow");
        }
    }

    topItem() {
        return this.data[this.top];
    }

    length() {
        return this.top + 1;
    }

    isEmpty() {
        return this.length() === 0;
    }

    isFull() {
        return this.length() === this.maxlength;
    }

    clear() {
        this.top = -1;
    }

    toString() {
        let result = "[";
        for (let i = 0; i <= this.top; i++) {
            result += ` ${this.data[this]} `;
        }
        result += "]";
        return result;
    }
}