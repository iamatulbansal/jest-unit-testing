const myModule = require("./string");
const string = myModule.string;
const stringVariable = myModule.stringVariable;
// 1.String as function output
test("testing String", () => {
  expect(string("Hello")).toMatch("Hello");
});
// 2.string as variable
test("testing String", () => {
  expect(stringVariable).toMatch("Hello");
});
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
