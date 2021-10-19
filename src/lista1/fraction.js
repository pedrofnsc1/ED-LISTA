export default class fractionTAD {
    constructor(numerator, denominator) {
        this.num = numerator;
        this.deno = denominator;
    }

    multiplicationBetweenFraction(fraction1, fraction2) {
        let result = new fractionTAD();

        result.num = fraction1.num * fraction2.num;
        result.deno = fraction1.deno * fraction2.deno;

        return result;
    };

    divisionBetweenFraction(fraction1, fraction2) {
        let result = new fractionTAD();

        result.num = fraction1.num * fraction2.deno;
        result.deno = fraction1.deno * fraction2.num;

        return result;
    };
};
