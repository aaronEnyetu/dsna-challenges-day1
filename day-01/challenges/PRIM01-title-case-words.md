Title Case Words
---

## Rules

You can (and should) use built in methods

## Challenge

Write a function that takes a sentence string and returns a new string that is the same sentence, but with the first letter of each word capitalized, and the rest lowercase

```js
function titleCase(sentence) {
```

> **You can assume valid inputs=**

## Test Cases

Input | Output
---|---
`'alchemy ROCKS goLD'` | `'Alchemy Rocks Gold'`




## REVISION CODE

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
