function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}


//------------------HOF01 (Add Punctuation)---------------------------
function addPunctuation(string) {
  return function punctuate(quote) {
    return (`${quote}${string}`);
  };
}

//--------------------------PRIM01 (Title Case Words)---------------------
function addCapitalToWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}


//-----------------------------PRIM02 (Oddish and Evenish)------------------------
  
function oddishEvenish(number) {
  let num = 0;
  String(number).split('').map(number => num += Number(number));
  return num % 2 === 0 ? 'evenish' : 'oddish';
}

//----------------------------PRIM03 (at)----------------------------------------

function at(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}


//---------------------------PRIM04 (Anagrams)-------------------------------------

function anagrams(str1, str2) {
  const ana = str1.split('');
  const grams = str2.split('');

  return ana.map(letter => grams.includes(letter)).includes(false) ? false : true;
}


//--------------------------PRIM05 (Fizz-Buzz)------------------------------------

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push ('fizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else arr.push(i);
  }
  return arr;
}


//---------------------------------PRIM06 (Multiples of n)----------------------------

function multiples(number) {
  const arr = [];
  if (number >= 50) return arr;
  for (let i = 1; i <= 50; i++) {
    if (i % number === 0) arr.push(i);
  }
  return arr;
}


//--------------------------------------REC01 (Digits-Sum-Root)-----------------------

function rootDigit(n) {
  const digits = n.toString().split('');
  const numbers = digits.map(d => +d);
  const sum = numbers.reduce((a, b) => a + b);

  return String(sum).split('').length === 1 ? sum : rootDigit(sum);
}


//-------------------------------------REC04 (Largest-Even)-----------------------------

function largestEven(arr) {
  const evens = [];
  // let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } 
  }
  evens.sort((a, b) => a - b);
  return (evens[evens.length - 1]) || -1;
}


//-----------------------------------REC03 (Fibonacci)-------------------------

function fib(n) {
  //takes an integer n as an argument
  //that integer corresponds to an index in the fibonacci sequence array
  if (n === 0) return 0;
  if (n === 1) return 1;
  //the function returns the fibonacci value at integer 'n'
  //which is the sum of the previous two indices in the array
  return fib(n - 1) + fib(n - 2);
}


//----------------------------STRETCH (Every)------------------------------------

function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++)  {
    if (!predicate(arr[i])) {
      return false;
    }
  }
  return true;
}


module.exports = { reverseSentence, addCapitalToWords, addPunctuation, oddishEvenish, at, anagrams, fizzBuzz, multiples, rootDigit, largestEven, fib, every };
 





