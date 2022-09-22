const { reverseSentence, addPunctuation, oddishEvenish, at, anagrams, fizzBuzz, multiples, rootDigit } = require('./index');
const { addCapitalToWords, largestEven, fib, every, filter } = require('./index');

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

it('should return oddish or evenish', () => {
  expect(oddishEvenish('121')).toEqual('evenish');
  expect(oddishEvenish('311')).toEqual('oddish');
  expect(oddishEvenish('41')).toEqual('oddish');
});

it('should find array.at()', () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  expect(at(arr, 2)).toEqual('c');
  expect(at(arr, -1)).toEqual('e');
});


it('anagrams should return true/false for anagrams', () => {
  const wordOne = 'superintended';
  const wordTwo = 'unpredestined';
  const wordThree = 'pictorialness';
  const wordFour = 'documentarily';
  expect(anagrams(wordOne, wordTwo)).toEqual(true);
  expect(anagrams(wordThree, wordFour)).toEqual(false);
});


it('fizzBuzz should return multiples of 3 with "Fizz" and multiples of 5 with "Buzz" ', () => {
  const arr =  [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz'];
  expect(fizzBuzz(15)).toEqual(arr);
});


it('should return all of the numbers from 1 to 50 that are multiples of `n`', () => {
  expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  expect(multiples(25)).toEqual([25, 50]);
});


it('rootDigit should return a single digit sum of numbers', () => {
  expect(rootDigit(123)).toEqual(6);
  expect(rootDigit(4322)).toEqual(2);
  expect(rootDigit(999888777)).toEqual(9);
});

test('largest-even', () => {
  expect(largestEven([2, 3, 4, 12])).toEqual(12);
});

test('fibonacci', () => {
  expect(fib(4)).toEqual(3);
});

test('every', () => {
  expect(every([2, 4, 6], n => n % 2 === 0)).toEqual(true);
});

test('filter', () => {
  expect(filter([1, 2, 3, 4], n => n % 2 === 0)).toEqual([2, 4]);
});
