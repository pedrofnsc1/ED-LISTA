import embaralhaLista from "../../src/lista3/questao5";
import Lista from "../../src/lista";

let lista;

beforeEach(() => {
  lista = new Lista(5);
});

test('Instanciar lista', () => {

  lista.append('P');
  lista.append('E');
  lista.append('D');
  lista.append('R');
  lista.append('O');
  expect(lista.toString()).toBe('P->E->D->R->O');
});



test('Embaralhar lista', () => {
  let l = new Lista()
  l.add(5);
  l.add(4);
  l.add(3);
  l.add(2);
  l.add(1);
  expect(l.toString()).toBe("1->2->3->4->5");
  l = embaralhaLista(l);
  console.log(l.toString());

});