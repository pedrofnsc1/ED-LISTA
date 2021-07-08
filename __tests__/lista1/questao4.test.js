import Pilha from "../../src/pilha";
import inverteTopo from "../../src/lista1/questao4";

let pilha;

beforeEach(() => {
    pilha = new Pilha(5);
});

test("Troca de posição", () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);
    expect(pilha.toString()).toBe("[ 1  2  3  4  5 ]");
    expect(inverteTopo(pilha).toString()).toBe("[ 5  2  3  4  1 ]");
});