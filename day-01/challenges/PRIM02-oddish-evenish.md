Oddish vs Evenish
---

This challenge is from [Edabit](https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH)

## Challenge

Write a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

```js
function oddishOrEvenish(number) {
```

> **You can assume valid input**

## Test Cases

Input | Output | Because
---|---|---
`121` | `'Evenish'` | `1 + 2 + 1 = 4`
`41` | `'Oddish'` | `4 + 1 = 5`

## EXAMPLE 1

const num = 434667;
const isOddish = (num, sum = 0) => {
   if(num){
      return isOddish(Math.floor(num / 10), sum + (num % 10));
   };
   return sum % 2 === 1;
};
console.log(isOddish(num));

## EXAMPLE 2

public class Program
{
    public static string OddishOrEvenish(int num)
    {
       string str = num.ToString();
       int conDig = 0;
       int result = 0;

       for (int i = 0; i < str.Length; i++)
       {
          conDig = str[i];
          result += conDig;
       }
       if (result % 2 == 0)
       {
          return "Evenish";
       }
       else
       {
          return "Oddish";
       }
    }
}
