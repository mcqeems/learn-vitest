async function getSingleQuote(id: number) {
  const response = await fetch(`https://dummyjson.com/quotes/${id}`);
  return response.json();
}

describe('Mocking test', () => {
  it('should verify fetch call and returned data', async () => {
    const mockData = {
      id: 1,
      quote: 'Your heart is the size of an ocean. Go find yourself in its hidden depths.',
      author: 'Rumi',
    };

    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: async () => mockData,
    } as Response);

    const result = await getSingleQuote(1);

    expect(fetchSpy).toHaveBeenCalledWith('https://dummyjson.com/quotes/1');

    expect(result).toEqual(mockData);

    fetchSpy.mockRestore();
  });
});
