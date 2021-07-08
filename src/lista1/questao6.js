import Pilha from './../pilha';

export default function verificaPilha(pilha) {
  let aux = new Pilha(10);

  for (let i = 0; i < pilha.size; i++) {
    if (pilha[i] === '[' || pilha[i] === '(') {
      aux.push(pilha[i]);
    } else if (pilha[i] === ']' || pilha[i] === ')') {
      let r = aux.pop();
      if ((r === '(' && pilha[i] !== ')') || (r === '[' && pilha[i] !== ']')) return false;
    }
  }
  return aux.isEmpty();
}
