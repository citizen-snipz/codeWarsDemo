// Wed 3-16-22
// Is it even? (8kyu)
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
//Parameters - number
//Return - boolean (true or false)
//Examples - testEven(0) => true, testEven(11) => false, testEven(1.2) => false
//Pseudo code
/* 
  make a function that takes in a number
  evaluate whether num is odd or even
  any decimals automatically eval to false
  return true if num is even, return false if odd
*/

function testEven(n) {
  if (!Number.isInteger(n) || n % 2) {
    return false;
  } else if (n % 2 === 0) {
    return true;
  }
}

//hi
