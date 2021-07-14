export default class stack {
    constructor(size = 5) {
        this.maxSize = size;
        this.data = [];
        this.top = -1;
    };

    push(newData) {
        if (this.isFull()) {
            throw new Error('stack overflow');
        } else {
            this.data[this.top++] = newData
        }
    };

    pop() {
        if (this.isEmpty()) {
            throw new Error('stack underflow');
        } else {
            return this.data[this.top--];
        }
    }

    topItem() {
        return this.data[this.top];
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.maxSize;
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