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


module.exports = { reverseSentence, addCapitalToWords, addPunctuation, oddishEvenish, at };
 





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
