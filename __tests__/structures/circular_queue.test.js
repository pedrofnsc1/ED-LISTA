import circularQueue from '../src/circularQueue'

let q;

beforeEach(() => {
  q = new circularQueue(5);
});

test("Instanciar", () => {
  expect(q.length()).toBe(0);
});

test("Enqueue", () => {
  q.enqueue(1);
  expect(q.length()).toBe(1);
  expect(q.isEmpty()).toBe(false);
});

test("Dequeue", () => {
  q.enqueue(1);
  expect(q.front()).toBe(1);
  expect(q.isEmpty()).toBe(false);
  q.dequeue();
  expect(q.length()).toBe(0);
  expect(q.isEmpty()).toBe(true);
});

test("queue overflow", () => {
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  expect(q.isFull()).toBe(true);
  expect(() => {
    q.enqueue(6);
  }).toThrowError("queue overflow");
});

test("queue underflow", () => {
  expect(() => {
    q.dequeue();
  }).toThrowError("queue underflow");
});

test("q circular", () => {
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  expect(() => {
    q.enqueue(6);
  }).toThrowError("queue overflow");
  expect(q.length()).toBe(5);
  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);
  expect(q.length()).toBe(3);
  q.enqueue(6);
  expect(q.length()).toBe(4);
  q.enqueue(7);
  expect(q.length()).toBe(5);
  expect(() => {
    q.enqueue(8);
  }).toThrowError("queue overflow");
  expect(q.dequeue()).toBe(3);
});
