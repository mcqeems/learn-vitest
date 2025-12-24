test('Check object x does not contain a property named `city`', () => {
  const x = {
    name: 'Alice',
    age: 30,
  };

  expect(x).not.toHaveProperty('city');
});
