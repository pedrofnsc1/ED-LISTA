import Lista from "../lista";

export default function embaralhaLista(lista) {
  let listaNormal = new Lista();

  while (!lista.isEmpty()) {
    listaNormal.addAt(
      Math.floor((Math.random() * lista.length()) + 1),
      lista.removeLast()
    );
  }
  listaNormal.addAt(
    Math.floor((Math.random() * listaNormal.length()) + 1),
    listaNormal.removeFirst()
  );
  return listaNormal;
}