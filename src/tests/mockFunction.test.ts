function outerFunction(callback: (num: number) => number) {
  const result = callback(6);
  return result * 2;
}

test('outerFunction calls callback with correct argument', () => {
  const mockCallback = vi.fn().mockImplementation((num: number) => num);
  const result = outerFunction(mockCallback);
  expect(result).toBe(12);
  expect(mockCallback).toHaveBeenCalledWith(6);
});
