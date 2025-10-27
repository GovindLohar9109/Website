// app.test.js

function add() {
  return 1 + 1;
}

// Jest test case
test('adds numbers correctly', () => {
  expect(add()).toBe(2);
});
