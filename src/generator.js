const validator = require('./validator');
const isbnTypes = {
  10: '10',
  13: '13'
};

const generator = (type = isbnTypes[10]) => {
  const randomNumber = parseInt(Math.random() * parseInt(Math.pow(10,type)));
  if ( type === isbnTypes[type] ) {
    const tempIsbn = randomNumber.toString();
    return validator(tempIsbn) ? tempIsbn : generator(type);
  } else {
    console.error('Invalid option. Pass "10" for isbn-10 and "13" for isbn-13');
    process.exit(1);
  }
};

module.exports = generator;
