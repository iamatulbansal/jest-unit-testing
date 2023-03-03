const fetchData = require("./promises");
test("Testing using promises", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Hello");
  });
});
