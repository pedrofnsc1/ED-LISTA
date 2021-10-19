import fractionTAD from '../../src/lista1/fraction';

let fraction;

beforeEach(() => {
    fraction = new fractionTAD();
});

test('Instantiation', () => {
    fraction.num = 2;
    fraction.deno = 5;
    expect(fraction.num).toBe(2);
    expect(fraction.deno).toBe(5);
});

test('Multiplication between fractions', () => {
    let frac1 = new fractionTAD(2, 5);
    let frac2 = new fractionTAD(3, 3);

    fraction = fraction.multiplicationBetweenFraction(frac1, frac2);
    expect(fraction.num).toBe(6);
    expect(fraction.deno).toBe(15);
});

test('Division between fractions', () => {
    let frac1 = new fractionTAD(2, 3);
    let frac2 = new fractionTAD(2, 4);

    fraction = fraction.divisionBetweenFraction(frac1, frac2);
    expect(fraction.num).toBe(8);
    expect(fraction.deno).toBe(6);
});
