import validate from './../src/validator.js';

test('validate method should return TRUE if passed value is a valid 10 numbers ISBN ', () => {
  expect(validate('84 - 481 - 2231 - 3')).toBe(true);
  expect(validate('84 - 481 2231- 3')).toBe(true);
  expect(validate('84   481         2231        3')).toBe(true);
  expect(validate('8448122313')).toBe(true);
  expect(validate('84-481-2231-3')).toBe(true);
  expect(validate('006095485X')).toBe(true);
});

test('validate method should return FALSE if passed string does not have the correct lenght', () => {
  expect(validate('84 - 481 - 2231')).toBe(false);
  expect(validate('848122313')).toBe(false);
  expect(validate('isbn: 84-481-2231-3')).toBe(false);
});

test('validate method should return TRUE if passed value is a valid 13 numbers ISBN ', () => {
  expect(validate('978-84-415-2682-2')).toBe(true);
  expect(validate('978-34-2628-155-0')).toBe(true);
  expect(validate('978-2-27-509083-2')).toBe(true);
});

test('validate method should return FALSE if passed value is NOT a valid 13 numbers ISBN ', () => {
  expect(validate('978-0-306-40615-6')).toBe(false);
});
