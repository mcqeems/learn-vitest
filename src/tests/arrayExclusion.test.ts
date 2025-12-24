test('Check array x does not contain number 40', () => {
  const x = [10, 20, 30];
  expect(x).not.contain(40);
});
