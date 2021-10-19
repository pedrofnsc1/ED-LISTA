import deque from "../../src/lista2/questao5";

let d;

beforeEach(() => {
  d = new deque();
});

test("insert in both sides", () => {
  d.addBack(1);
  d.addStart(2);
  //expect(d.frontItem()).toBe(2);
  // d.enqueueStart(3);
  // d.enqueueStart(4);
  // d.enqueueEnd(10);
  // d.enqueueEnd(11);
  // d.enqueueEnd(12);
  expect(d.toString()).toBe("[2 -> 1]");
});

// test("insert both sides and remove", () => {
//   d.enqueueStart(1);
//   d.enqueueStart(2);
//   d.enqueueStart(3);
//   d.dequeueA();
//   expect(d.frontA()).toBe(1);
//   d.enqueueB(10);
//   d.enqueueB(11);
//   d.enqueueB(12);

//   d.dequeueB();
//   expect(d.frontB()).toBe(11);
// });
