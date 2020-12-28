const validLengths = {
  MIN: 10,
  MAX: 13
};
const formatString = string => string.split('-').join('').replace(/\s/g, '');

const hasCorrectFormat = value => value.length === validLengths.MIN || value.length === validLengths.MAX;

const IsValidIsbn = isbn => {
  let result = false;
  const isbnAsArray = Array.from(isbn);
  const controlDigit = isbnAsArray.pop();

  if (isbn.length === validLengths.MIN ) {
    const sumOfIsbnNumbers = isbnAsArray.map((el, index) => {
      return el * (index + 1);
    }).reduce((acc, curr) => acc + curr );

    const modulus = sumOfIsbnNumbers % 11;

    result = controlDigit.toUpperCase() === 'X' ? modulus === 10 : modulus === parseInt(controlDigit);

  } else {
    const elementsSum = isbnAsArray.map((el, index) => (index + 1) % 2 === 0 ? el * 1 : el * 3).reduce((acc, curr) => acc + curr);

    result = getControlDigit(elementsSum) === parseInt(controlDigit);
  }

  return result;
};

const getControlDigit = (sum, acc = 0) => {
  return sum % 10 !== 0 ? getControlDigit(sum + 1, acc + 1) : acc;
};

const validate = (isbn) => {
  const sanitizedIsbn = formatString(isbn);
  let result = false;

  if (hasCorrectFormat(sanitizedIsbn)) {
    result = IsValidIsbn(sanitizedIsbn);
  }

  return result;
};

module.exports = validate;
