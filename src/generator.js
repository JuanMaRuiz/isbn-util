const validator = require('./validator');
const isbnTypes = {
  10: '10',
  13: '13'
};

const isValidString = (value) => typeof value == 'string' || value instanceof String;

const validateOption = (option = '') => {
  if (isValidString(option) || option === 'prefix') {
    return Boolean(option);
  } else {
    console.error(`The option "${option}" passed is not correct. Pass "prefix" instead."`);
    process.exit(1);
  }
};

const generator = (type = isbnTypes[10], option) => {
  const prefix = validateOption(option) ? `isbn-${type}: ` : '';
  const randomNumber = parseInt(Math.random() * parseInt(Math.pow(10,type)));
  if ( type === isbnTypes[type] ) {
    const tempIsbn = randomNumber.toString();
    return validator(tempIsbn) ? `${prefix}${tempIsbn}` : generator(type, option);
  } else {
    console.error('Invalid option. Pass "10" for isbn-10 and "13" for isbn-13');
    process.exit(1);
  }
};

module.exports = generator;
