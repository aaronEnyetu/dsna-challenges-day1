function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(string) {
  return function punctuate(quote) {
    return (`${quote}${string}`);
  };
}

function addCapitalToWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');


}
  
  
module.exports = { reverseSentence, addCapitalToWords, addPunctuation };
 





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
