import generator from './../src/generator.js';
import validate from './../src/validator.js';

test('should return a valid isbn according with the passed param', () => {
  const validIsbn = generator('10');
  expect(validate(validIsbn)).toBe(true);
});

test('should return a isbn string with the correct length depending on when "title" attribute is not passed', () => {
  const isbnTen = generator('10');
  const isbnThirteen = generator('13');
  expect(isbnTen.length).toEqual(10);
  expect(isbnThirteen.length).toBe(13);
});

test('should return a isbn string with the correct title depending on the type selected', () => {
  expect(generator('10', 'prefix')).toContain('isbn-10: ');
  expect(generator('13', 'prefix')).toContain('isbn-13: ');
});

test('should finish process when "prefix" option is not a valid value', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
  generator('10', true);
  expect(mockExit).toHaveBeenCalledWith(1);
  generator('10', 'prefi');
  expect(mockExit).toHaveBeenCalledWith(1);
  mockExit.mockRestore();
});

test('should finish process when "isbnType" option is not a valid value', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
  generator('14');
  expect(mockExit).toHaveBeenCalledWith(1);
  mockExit.mockRestore();
});
