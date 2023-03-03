const fetchData = require("./asyncAwait");
test("Testing using Async/Await", async () => {
  const data = await fetchData()
  expect(data).toBe("Hello");
});
