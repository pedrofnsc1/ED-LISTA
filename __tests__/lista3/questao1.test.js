import pilhaDinamica from './../../src/lista3/questao1';

let pilha;

beforeEach(() => {
  pilha = new pilhaDinamica(5);
});


test('instanciar', () => {
  expect(pilha.isEmpty()).toBe(true);
});

test('insere e verifica o topo', () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  expect(pilha.top()).toBe(4);
});

test('Inserir e remover valores', () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.push(4);
  pilha.push(5);
  expect(pilha.top()).toBe(5);
});

test('teste de toString', () => {
  pilha.push('P');
  pilha.push('E');
  pilha.push('D');
  pilha.push('R');
  pilha.push('O');
  expect(pilha.toString()).toBe('P->E->D->R->O');
  pilha.pop();
  expect(pilha.toString()).toBe('P->E->D->R');
  pilha.pop();
  expect(pilha.toString()).toBe('P->E->D');
  pilha.pop();
  expect(pilha.toString()).toBe('P->E');
  pilha.pop();
  expect(pilha.toString()).toBe('P');
  pilha.pop();
  expect(pilha.toString()).toBe('');


});

