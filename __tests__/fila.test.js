import fila from './../src/fila';

let novaFila;

beforeEach( () => {

    novaFila = new fila(5); 

});

test("Instanciação", () => {

    expect(novaFila.size()).toBe(0);

});

test("Está vazio?", () => {

    expect(novaFila.isEmpty()).toBe(true);

});


test("adicionar um elemento", () =>{
    novaFila.enqueue(1)
    expect(novaFila.size()).toBe(1);
    expect(novaFila.front()).toBe(1);
});

test("queue overflow", () =>{
    novaFila.enqueue(1)
    novaFila.enqueue(2)
    novaFila.enqueue(3)
    novaFila.enqueue(4)
    novaFila.enqueue(5)
    expect(novaFila.size()).toBe(5);
    expect(() =>{
        novaFila.enqueue(6);
    }).toThrowError("queue overflow");
});

test("queue underflow", () => {
    expect(() =>{
        novaFila.dequeue();
    }).toThrowError("queue underflow");
});

test("front da fila", () => {
    novaFila.enqueue(2);
    expect(novaFila.front()).toBe(2);

});

test("remover da fila", () =>{
    novaFila.enqueue(1)
    novaFila.enqueue(2)
    novaFila.enqueue(3)
    novaFila.enqueue(4)
    novaFila.enqueue(5)
    expect(novaFila.dequeue()).toBe(1);
});

test("limpar a fila", () => {
    novaFila.enqueue(1)
    novaFila.enqueue(2)
    novaFila.enqueue(3)
    novaFila.enqueue(4)
    novaFila.enqueue(5)
    expect(novaFila.size()).toBe(5);
    novaFila.clear();
    expect(novaFila.size()).toBe(0);
});

