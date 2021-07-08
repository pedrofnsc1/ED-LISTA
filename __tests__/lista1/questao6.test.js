import verificaPilha from "../../src/lista1/questao6";

test("Teste de expressao", () => {
  expect(verificaPilha("[ ( ) [ ( ) ] ] ( )")).toBe(true);
  expect(verificaPilha(" ) ( ) ] ")).toBe(false);
});