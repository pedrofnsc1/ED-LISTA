import Stack from "../src/pilha";

let s;

beforeEach(() => {
    s = new Stack(5);
});

test("Pilha está vazia",
    () => {
        s.push("dado")
        expect(s.isEmpty()).toBe(false);
    }
);

test("Stack underflow",
    () => {
        expect(() => {
            s.pop()
        }).toThrowError("stack underflow");
    }
)

test("stack overflow",
    () => {
        s.push("1");
        s.push("2");
        s.push("3");
        s.push("4");
        s.push("5");
        expect(() => {
            s.push("6")
        }).toThrowError("stack overflow");

    });

test("Add um elemento", () => {
    expect(s.isEmpty()).toBe(true);
}
);

test("Size inicial", () => {
    expect(s.size()).toBe(0);
}
);

test("push(5)", () => {
    s.push(5);
    expect(s.size()).toBe(1);

});

test("push(5), push(6), push(7)",
    () => {
        s.push(5);
        s.push(6);
        s.push(7);
        expect(s.size()).toBe(3);
        s.pop();

    });
test("push(5), push(6), push(7), pop(), topItem()", () => {
    s.push(5);
    s.push(6);
    s.push(7);
    s.pop()
    expect(s.size()).toBe(2);
    expect(s.topItem()).toBe(6);

})




