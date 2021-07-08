export default class questao1{

    constructor(numerador, denominador){
        this.numerador = numerador;
        this.denominador = denominador;
    };

    multiplicacao(fracao1, fracao2){
        let resultado = new questao1();
        resultado.numerador = fracao1.numerador * fracao2.numerador;
        resultado.denominador = fracao1.denominador * fracao2.denominador;

        return resultado;
    };

    divisao(fracao1, fracao2){
        let resultado = new questao1();
        resultado.numerador = fracao1.numerador * fracao2.denominador;
        resultado.denominador = fracao1.denominador * fracao2.numerador;

        return resultado;
    }


}