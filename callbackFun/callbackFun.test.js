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
