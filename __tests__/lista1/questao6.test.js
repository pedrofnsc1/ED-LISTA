import Q6 from "../../src/lista1/questao6";

let A;
let sequence;
beforeEach(() => {
  A = new Q6;
  sequence = '';
});
test('Instantiation', () => {
  sequence = '';
  expect(A.verifyStack(sequence)).toBe('theres no sequence here');
});

test("return false", () => {
  sequence = '(()]';
  expect(A.verifyStack(sequence)).toBe(false);
});

test("return true", () => {
  sequence = '[ ( ) [ ( ) ] ] ( )]';
  expect(A.verifyStack(sequence)).toBe(true);
});