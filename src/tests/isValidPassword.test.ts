import isValidPassword from '@/utils/isValidPassword';

test('Check if 12345678 is a valid password', () => {
  expect(isValidPassword('12345678')).toBeTruthy();
});
