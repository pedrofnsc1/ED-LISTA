import twosQueueOneStack from "../../src/Lista2/questao1";

let s;

beforeEach(() => {
  s = new twosQueueOneStack();
});

test("Inserção e fronto", () => {
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.front()).toBe(4);
});

test("Inserção e remoção", () => {
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.pop()).toBe(4);
});
