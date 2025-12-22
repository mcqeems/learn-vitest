test('Check if mcqeems@gmail.com is an email', () => {
  const email = 'mcqeems@gmail.com';
  expect(email).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/);
});
