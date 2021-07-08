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
  console.log(lista.toString());
});



test('Embaralhar lista', () => {

  lista.add('1');
  lista.add('R');
  lista.add('D');
  lista.add('E');
  lista.add('P');
  expect(lista.toString()).toBe('P->E->D->R->1');
  lista = embaralhaLista(lista);
  console.log(lista.toString(lista));

});