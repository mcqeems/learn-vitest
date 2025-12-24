test('Check if x is the same as y ', () => {
  const x = [
    {
      name: 'Emily Blunt',
      age: 35,
      movies: {
        name: 'No time to die',
        year: 2025,
      },
    },
  ];

  const y = [
    {
      name: 'Emily Blunt',
      age: 35,
      movies: {
        name: 'No time to die',
        year: 2025,
      },
    },
  ];

  expect(x).toEqual(y);
});
