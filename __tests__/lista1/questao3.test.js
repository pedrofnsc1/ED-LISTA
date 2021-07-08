import pilhas from "../../src/lista1/questao3";
//import pilhas from "../../../ed-listas/AULAED/src/Lista_1/Questao3"
let pilha;

beforeEach(() => {
    pilha = new pilhas(10);
});

test("Teste de Pilhas com apenas um vetor", ()=>{
    expect(pilha.AisEmpty()).toBe(true);
    expect(pilha.BisEmpty()).toBe(true);
    pilha.pushA("A");
    expect(pilha.AisEmpty()).toBe(false);
    expect(pilha.BisEmpty()).toBe(true);
    pilha.pushB("1");
    expect(pilha.BisEmpty()).toBe(false);
    pilha.popA();
    expect(pilha.AisEmpty()).toBe(true);
    expect(pilha.BisEmpty()).toBe(false);

})