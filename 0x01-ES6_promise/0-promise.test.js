import getResponseFromAPI from "./0-promise.js";

test('getResponseFromAPI returns a Promise', () => {
  const prom = getResponseFromAPI();
  expect(prom instanceof Promise).toBe(true);
});
