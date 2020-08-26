const generator = require('./../src/generator.js');
const validator = require('./../src/validator.js');

test('should return a valid isbn according with the passed param', () => {
  const validIsbn = generator('10').split(' ')[1];
  expect(validator(validIsbn)).toBe(true);
});

test('should return a string with the correct pattern depending on the type selected', () => {
  expect(generator('10')).toContain('isbn-10: ');
  expect(generator('13')).toContain('isbn-13: ');
});
