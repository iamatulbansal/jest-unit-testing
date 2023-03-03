const fetchData = require("./promises");
test("Tesing using promises", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Hello");
  });
});
