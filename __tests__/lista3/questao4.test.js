import inverteLista from '../../src/lista3/questao4';
import Lista from '../../src/lista';

let lista;

beforeEach(() => {
  lista = new Lista(5);
});

test('Instanciando Lista', () => {
  lista.add('O');
  lista.add('R');
  lista.add('D');
  lista.add('E');
  lista.add('P');
  expect(lista.toString()).toBe('P->E->D->R->O');
  console.log(lista.toString());

});

test('Invertendo lista', () => {
  lista.add('O');
  lista.add('R');
  lista.add('D');
  lista.add('E');
  lista.add('P');
  expect(lista.toString()).toBe('P->E->D->R->O');
  expect(inverteLista(lista).toString()).toBe('O->R->D->E->P');
});