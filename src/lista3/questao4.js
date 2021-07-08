import Lista from '../lista';

export default function inverteLista(lista) {
  let listaNormal = new Lista();

  while (!lista.isEmpty()) {
    listaNormal.append(lista.removeLast());
  }

  return listaNormal;
}