const validLengths = {
  MIN: 10,
  MAX: 13
};
const formatString = string => string.split('-').join('').replace(/\s/g, '');

const hasCorrectFormat = value => value.length === validLengths.MIN || value.length === validLengths.MAX;

const IsValidIsbn = isbn => {
  let result = false;
  const isbnAsArray = Array.from(isbn);

  if (isbn.length === validLengths.MIN ) {
    const sumOfIsbnNumbers = isbnAsArray.map((el, index) => {
      return el * (index + 1);
    }).reduce((acc, curr) => acc + curr );

    result = (sumOfIsbnNumbers % 11) === 0;

  } else {
    const controlDigit = isbnAsArray.pop();
    const elementsSum = isbnAsArray.map((el, index) => (index + 1) % 2 === 0 ? el * 1 : el * 3).reduce((acc, curr) => acc + curr);
    const sumModule = elementsSum % 10;

    result = 10 - sumModule === parseInt(controlDigit);
  }

  return result;
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
