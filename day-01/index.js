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

module.exports = { reverseSentence, addCapitalToWords, addPunctuation, oddishEvenish, at, anagrams, fizzBuzz, multiples, rootDigit };
 





//----------------------------CODE FOR REVISION-------------------------
// ADD CAPITAL TO WORDS
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function capitalizeWords(str) {
//   return str.replace(/(^\w{1})|(\s{1}\w{1})/g, (a) => {
//     return a.toUpperCase();
//   });
// }
// str = str.split('');

// for (let i = 0; i < str.length ; i++) {
//   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
// }

// return str.join('');
// }
