const generator = require('./../src/generator.js');
const validator = require('./../src/validator.js');

test('should return a valid isbn according with the passed param', () => {
  const validIsbn = generator('10');
  expect(validator(validIsbn)).toBe(true);
});
