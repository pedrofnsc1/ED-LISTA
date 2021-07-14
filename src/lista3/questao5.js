import Lista from "../lista";

export default function embaralhaLista(lista) {
  let listaNormal = new Lista();

  while (!lista.isEmpty()) {
    listaNormal.addAt(
      Math.floor((Math.random() * lista.length()) + 1),
      lista.removeLast());
  }
  let result = listaNormal.removeFirst();
  listaNormal.addAt(
    Math.floor((Math.random() * listaNormal.length()) + 1),
    result);
  return listaNormal;
}