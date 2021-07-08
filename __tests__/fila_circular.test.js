import circular from '../src/fila_circular'

let fila;

beforeEach(() => {
  fila = new circular(5);
});

test("Instanciar", () => {
  expect(fila.size()).toBe(0);
});

test("Enqueue", () => {
  fila.enqueue(1);
  expect(fila.size()).toBe(1);
  expect(fila.isEmpty()).toBe(false);
});

test("Dequeue", () => {
  fila.enqueue(1);
  expect(fila.front()).toBe(1);
  expect(fila.isEmpty()).toBe(false);
  fila.dequeue();
  expect(fila.size()).toBe(0);
  expect(fila.isEmpty()).toBe(true);
});

test("stack overflow", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  fila.enqueue(4);
  fila.enqueue(5);
  expect(fila.isFull()).toBe(true);
  expect(() => {
    fila.enqueue(6);
  }).toThrowError("stack overflow");
});

test("stack underflow", () => {
  expect(() => {
    fila.dequeue();
  }).toThrowError("stack underflow");
});

test("Fila circular", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  fila.enqueue(4);
  fila.enqueue(5);
  expect(() => {
    fila.enqueue(6);
  }).toThrowError("stack overflow");
  expect(fila.size()).toBe(5);
  expect(fila.dequeue()).toBe(1);
  expect(fila.dequeue()).toBe(2);
  expect(fila.size()).toBe(3);
  fila.enqueue(6);
  expect(fila.size()).toBe(4);
  fila.enqueue(7);
  expect(fila.size()).toBe(5);
  expect(() => {
    fila.enqueue(8);
  }).toThrowError("stack overflow");
  expect(fila.dequeue()).toBe(3);
});
