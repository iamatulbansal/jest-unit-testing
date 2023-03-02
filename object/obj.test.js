const obj = require("./obj");
test("Object Testing", () => {
  expect(obj()).toEqual({ name: "Atul Bansal" });
//   If you want to check the value of an object, use toEqual
//   You can also test for the opposite of a matcher using not:
});
/* 
Pro TIP
toEqual ignores object keys with undefined properties, undefined array items, array sparseness, or object type mismatch. To take these into account use toStrictEqual instead.

*/
test("Object Deep Testing", () => {
  expect(obj()).toStrictEqual({ name: "Atul Bansal",age:undefined });
});
