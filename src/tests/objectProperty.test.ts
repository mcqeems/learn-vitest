test('Check userProfile have the corresponding properties.', () => {
  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    contact: {
      email: 'john@doe.com',
      phone: 6277771,
    },
  };

  expect(userProfile).toHaveProperty('firstName');
  expect(userProfile).toHaveProperty('lastName');
  expect(userProfile).toHaveProperty('contact.email');
  expect(userProfile).toHaveProperty('contact.phone');
});
