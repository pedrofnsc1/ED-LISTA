import twoStackOneQueue from '../../src/lista2/questao2';

let q;

beforeEach(() => {
  q = new twoStackOneQueue(5);
})

test('instantiation', () => {
  expect(q.length()).toBe(0);
});

test('queue underflow', () => {
  expect(() => {
    q.dequeue();
  }).toThrowError("stack underflow");
});

test('insertion / enqueue', () => {
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  expect(q.length()).toBe(5);
  expect(q.front()).toBe(1);
});

test('remotion / dequeue', () => {
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  expect(q.length()).toBe(5);
  expect(q.front()).toBe(1);
  q.dequeue();
  expect(q.length()).toBe(4);
  expect(q.front()).toBe(2);
});
