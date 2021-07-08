import filaDinamica from "../../src/lista3/questao2";

let fila;

beforeEach(() => {
  fila = new filaDinamica(5);
});

test('instanciar fila', () => {
  expect(fila.isEmpty()).toBe(true);
});

test('adicionar e ver inicio', () => {
  fila.enqueue('U');
  fila.enqueue('F');
  fila.enqueue('R');
  fila.enqueue('N');
  expect(fila.front(0)).toBe('U');
});

test('remover item na fila', () => {
  fila.enqueue('U');
  fila.enqueue('F');
  fila.enqueue('R');
  fila.enqueue('N');
  expect(fila.toString()).toBe('U->F->R->N');
  expect(fila.isEmpty()).toBe(false);
  expect(fila.front()).toBe('U');
  fila.dequeue();
  expect(fila.front()).toBe('F');
  fila.dequeue();
  expect(fila.front()).toBe('R');
  fila.dequeue();
  expect(fila.front()).toBe('N');
  fila.dequeue();
  expect(fila.isEmpty()).toBe(true);
});