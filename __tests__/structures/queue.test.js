import Queue from '../src/queue';

let q;

beforeEach(() => {

    q = new Queue(5);

});

test("Instanciação", () => {

    expect(q.length()).toBe(0);

});

test("Está vazio?", () => {
    expect(q.isEmpty()).toBe(true);
});


test("adicionar um elemento", () => {
    q.enqueue(1)
    expect(q.length()).toBe(1);
    expect(q.front()).toBe(1);
});

test("queue overflow", () => {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)
    q.enqueue(5)
    expect(q.length()).toBe(5);
    expect(() => {
        q.enqueue(6);
    }).toThrowError("queue overflow");
});

test("queue underflow", () => {
    expect(() => {
        q.dequeue();
    }).toThrowError("queue underflow");
});

test("front da fila", () => {
    q.enqueue(2);
    expect(q.front()).toBe(2);

});

test("remover da fila", () => {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)
    q.enqueue(5)
    q.dequeue();
    expect(q.front()).toBe(2);
});

test("limpar a fila", () => {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)
    q.enqueue(5)
    expect(q.length()).toBe(5);
    q.clear();
    expect(q.length()).toBe(0);
});

