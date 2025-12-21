import createPerson from '@/utils/createPerson';

test('Create Jack with the age of 15 as a new person', () => {
  const expectedResult = {
    name: 'Jack',
    age: 15,
  };
  expect(createPerson('Jack', 15)).toEqual(expectedResult);
});
