import Pilha from './../pilha'

export default function converte(decimal) {
  let aux = new Pilha(10);

  for (aux; decimal > 0; decimal = Math.floor(decimal / 2)) {
    aux.push(decimal % 2);
  }

  let resultado = "";
  while (aux.size() > 0) {
    resultado += `${aux.pop()}`;
  }

  return resultado;

}