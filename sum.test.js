const sum = require('./sum')
//Case 1
test("adds 1 + 2 to equal 3", () => {
    expect(sum(1 , 2)).toBe(3);
})
//Case 1
test("adds 3 + 2 to equal 5", () => {
    expect(sum(3 , 2)).toBe(5);
})
//Case 1
test("adds 6 + 2 to equal 8", () => {
    expect(sum(6 , 2)).toBe(8);
})
