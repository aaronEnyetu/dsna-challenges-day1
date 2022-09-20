const { reverseSentence } = require('./index');
const { addCapitalToWords } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
});

describe('Add capital to first letter of a word', () => {
  it('should add a capital letter to each word', () => {
    expect(addCapitalToWords('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
  });
});
