import { expect, test } from 'vitest';
import increment from '../utils/increment';

test('adds 1 + 1 equals 2', () => {
  expect(increment(1, 1)).toBe(2);
});

test('adds -1 + 1 equals 0', () => {
  expect(increment(-1, 1)).toBe(0);
});

test('adds 2 + 2 equals 4', () => {
  expect(increment(2, 2)).toBe(4);
});
