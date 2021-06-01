import Hello from "../src/Hello";

let h;

beforeEach(() => {
	h = new Hello("hello");
});

test("Instanciacao", () => {
	expect(h.getMessage()).toBe("hello");
});
