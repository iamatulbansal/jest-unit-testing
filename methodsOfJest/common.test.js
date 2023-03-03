const { sum } = require("./common");

beforeEach(() => {
    console.log("initial Data is Working!");
    
});
test("Multiply 2 * 2 get answer is 4 ", () => {
    expect(sum(2, 2)).toBe(4);
});
