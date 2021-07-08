import Converte from '../../src/lista1/questao5';

test("DECIMAL - BINARIO", () => {

  expect(Converte(30)).toBe("11110");
  expect(Converte(3)).toBe("11");
  expect(Converte(10)).toBe("1010");
  expect(Converte(5)).toBe("101");
});