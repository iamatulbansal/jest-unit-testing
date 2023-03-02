<h1>Jest Unit Tesing</h1>


<h2>Number Folder</h2>
 In this folder i was testing number  with using toBe or not.toBe Methods
<!-- ===================================================================== -->
<!-- sum.js code -> -->
function sum(num1, num2) {
    return num1 + num2;
}
module.exports = sum

<!-- sum.test.js testing code -> -->
const sum = require('./sum')
//Case 1
test("adds 1 + 2 to equal 3", () => {
    expect(sum(3 , 1)).not.toBe(5);
     // So in this case whenever value is 5 then test cases failed
})
//Case 1
test("adds 3 + 2 to equal 5", () => {
    expect(sum(3 , 2)).toBe(5);
})
//Case 1
test("adds 6 + 2 to equal 8", () => {
    expect(sum(6 , 2)).toBe(8);
})

<!-- =========================================================================== -->
<h2>object Folder</h2>
 In this folder i was test object whit using toEqual and toStrictEqual Methods

 Pro Tip
 toEqual ignores object keys with undefined properties, undefined array items, array sparseness, or object type mismatch. To take these into account use toStrictEqual instead.

<!-- =========================================================================== -->
<!-- object.js -->
function obj() {
    return { name: "Atul Bansal", age: undefined }
}
module.exports = obj;

<!-- object.test.js for testing code -->
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

<!-- =========================================================================== -->
