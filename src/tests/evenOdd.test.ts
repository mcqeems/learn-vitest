import evenOdd from '@/utils/evenOdd';

test('Check if 5 is odd', () => {
  expect(evenOdd(5)).toBe(false);
});

test('Check if 6 is even', () => {
  expect(evenOdd(6)).toBe(true);
});
