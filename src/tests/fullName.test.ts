import fullName from '@/utils/fullName';

test('Concatenate Jerry and Maguire', () => {
  expect(fullName('Jerry', 'Maguire')).toBe('Jerry Maguire');
});
