import { expect, test } from 'vitest';
import userAge from '../utils/userAge';

test('Verify is age 50 still valid', () => {
  expect(userAge(50)).toBe(true);
});
