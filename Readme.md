<h1>Jest Unit Tesing</h1>


<h2>Number</h2>
<p>In this folder i was testing number  with using toBe or not.toBe Methods</p>
 
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

<h2>object</h2>
 <p>In this folder i was test object whit using toEqual and toStrictEqual Methods</p>

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

<h2>Strings</h2>
<p>You can check strings against regular expressions with toMatch</p>
<!-- =========================================================================== -->
<!-- string.js -->
function string(args) {
    return args;
}
module.exports = string;

<!-- string.test.js -->
const string = require('./string');
test('testing String', () => {
    expect(string('Hello')).toMatch("Hello")
})
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

<!-- =========================================================================== -->
<h2>Callback</h2>

<!-- Main file js -->
function fetchData(back) {
  return back("Hello");
}
module.exports = fetchData;
<!-- test file -->
const fetchData = require("./callbackFun");
test("fetchData Using Callback", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Hello");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

<h2>Promises</h2>
<!-- main file js  for promises-->
function fetchData() {
    return new Promise((resolve, reject) => {
        resolve("Hello");
    });
}
module.exports = fetchData;
<!-- Main file js for testing -->
const fetchData = require("./promises");
test("Testing using promises", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Hello");
  });
});
<!-- ================================================================ -->
