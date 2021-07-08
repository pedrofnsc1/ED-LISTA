import pilha from "../pilha";

export default function inverte(palavra) {
    let p = new pilha(palavra.size);
    let invertido = "";

    for (let letra of palavra) {
        p.push(letra);
    }
    while (!p.isEmpty()) {
        invertido += p.pop();
    }
    return invertido;
}