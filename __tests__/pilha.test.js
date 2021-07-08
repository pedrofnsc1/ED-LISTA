import Pilha from "../src/pilha";

let p;

beforeEach ( () => {
    p = new Pilha(5);
});

test("Pilha está vazia",
 () => {
     p.push("dado")
     expect(p.isEmpty()).toBe(false);
 }
);

test("Stack underflow",
		() => {
			expect(()=>{
				p.pop()
			}).toThrowError("stack underflow");
		}
)

test("stack overflow",
 () => {
    p.push("1");
    p.push("2");
    p.push("3");
    p.push("4");
    p.push("5");
    expect(() => {
        p.push("6")
    }).toThrowError("stack overflow");

});

test("Add um elemento", () =>{
    expect(p.isEmpty()).toBe(true);
 }
);

test("Size inicial", () =>{
    expect(p.size()).toBe(0);
 }
);

test("push(5)", () => {
    p.push(5);
    expect(p.size()).toBe(1);

});

test("push(5), push(6), push(7)", 
() => {
    p.push(5);
    p.push(6);
    p.push(7);
    expect(p.size()).toBe(3);

});
test("push(5), push(6), push(7), pop(), top()", () => {
    p.push(5);
    p.push(6);
    p.push(7);
    p.pop()
    expect(p.size()).toBe(2);
    expect(p.top()).toBe(6);

})




