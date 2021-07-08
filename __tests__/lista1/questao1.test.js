import questao1 from "../../src/lista1/questao1";

let x;

beforeEach( () => {
    x = new questao1();

});

test("Instanciar fração", () =>{
    x.numerador = 5;
    x.denominador = 10;
});

test("multiplicacao", () => {
    let fracao1 = new questao1(2, 3);
    let fracao2 = new questao1(2, 6);
    x = x.multiplicacao(fracao1,fracao2);
    expect(x.numerador).toBe(4);
    expect(x.denominador).toBe(18)

});

test("divisao", () => {
    let fracao1 = new questao1(2, 3);
    let fracao2 = new questao1(2, 6);
    x = x.divisao(fracao1,fracao2);
    expect(x.numerador).toBe(12);
    expect(x.denominador).toBe(6)

});
