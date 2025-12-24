test('Check if pizza id is equal to expectedId', () => {
  const food = [
    {
      id: 1,
      name: 'Pizza',
      price: 5,
    },
    {
      id: 2,
      name: 'Burger',
      price: 3,
    },
  ];

  const expectedId = 2;
  const validateId = food.some((obj) => obj.id === expectedId);

  expect(validateId).toBe(true);
});
