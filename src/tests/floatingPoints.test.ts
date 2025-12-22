import floatingPoint from '@/utils/floatingPoint';

test('0.3 is the sum of 0.1 and 0.2', () => {
  expect(floatingPoint(0.1, 0.2)).toBeCloseTo(0.3);
});
