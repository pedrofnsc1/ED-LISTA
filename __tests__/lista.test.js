
import Lista from "../src/lista"

let lista;

beforeEach(() => {
  lista = new Lista();
});

test("Instanciacao", () => {
  expect(lista.length()).toBe(0);
  expect(lista.isEmpty()).toBe(true);
});

test("Adicionar em lugares variados", () => {
  lista.add(1);
  lista.add(2);
  lista.add(3);
  lista.add(4);
  expect(lista.length()).toBe(4);
  expect(lista.toString()).toBe("4->3->2->1");
  lista.append(5);
  expect(lista.toString()).toBe("4->3->2->1->5");
  lista.removeFirst();
  expect(lista.toString()).toBe("3->2->1->5");
  lista.removeLast();
  expect(lista.toString()).toBe("3->2->1");
  expect(lista.length()).toBe(3);
  lista.addAt(1, 6);
  expect(lista.toString()).toBe("3->6->2->1");
  expect(lista.search(5)).toBe(false);
  expect(lista.search(6)).toBe(true);
});

