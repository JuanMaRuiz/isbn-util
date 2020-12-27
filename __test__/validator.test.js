const validator = require('./../src/validator');

// Valid ISBN 8497364678, 84-481-2231-3, 978-84-415-2682-2

test('validator should return TRUE if passed value is a valid 10 numbers ISBN ', () => {
  expect(validator('84 - 481 - 2231 - 3')).toBe(true);
  expect(validator('84 - 481 2231- 3')).toBe(true);
  expect(validator('84   481         2231        3')).toBe(true);
  expect(validator('8448122313')).toBe(true);
  expect(validator('84-481-2231-3')).toBe(true);
  expect(validator('006095485X')).toBe(true);
});

test('should return FALSE if passed string does not have the correct lenght', () => {
  expect(validator('84 - 481 - 2231')).toBe(false);
  expect(validator('848122313')).toBe(false);
  expect(validator('isbn: 84-481-2231-3')).toBe(false);
});

test('validator should return TRUE if passed value is a valid 13 numbers ISBN ', () => {
  expect(validator('978-0137081073')).toBe(true);
  expect(validator('978-84-415-2682-2')).toBe(true);
});
