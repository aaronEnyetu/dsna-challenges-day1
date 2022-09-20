const { reverseSentence, addPunctuation } = require('./index');
const { addCapitalToWords } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
});

it('should add punctuation to sentence', () => {
  const addExcitement = addPunctuation('!!!');

  const addQuery = addPunctuation('?!?');

  const helloWorld = addExcitement('Hello World');

  expect(helloWorld).toEqual('Hello World!!!');
  expect(addQuery('hello')).toEqual('hello?!?');
});


describe('Add capital to first letter of a word', () => {
  it('should add a capital letter to each word', () => {
    expect(addCapitalToWords('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
  });
});
