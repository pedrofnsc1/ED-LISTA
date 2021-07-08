import Pilha from './../pilha';

export default function inverteTopo(pilha) {
  let aux = new Pilha(pilha.maxSize);
  let topo;
  let base;

  topo = pilha.pop();
  while (pilha.size() > 1) {
    aux.push(pilha.pop());
  }
  base = pilha.pop();
  pilha.push(topo);

  while (aux.size() > 0) {
    pilha.push(aux.pop());
  }
  pilha.push(base);
  return pilha;




}