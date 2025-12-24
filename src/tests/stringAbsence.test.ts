test('Check if `Hello World` does not contain substring `GoodBye`', () => {
  expect('Hello World').not.contain('GoodBye');
});
