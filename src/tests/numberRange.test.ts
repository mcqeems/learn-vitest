test('age should be greater than 18 and less than 65', () => {
  const age = 20;
  expect(age).toBeGreaterThanOrEqual(18);
  expect(age).toBeLessThanOrEqual(65);
});
