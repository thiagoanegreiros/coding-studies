const assert = require('assert')

/* Q1
You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. 
When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow off.
	
For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4 , 1, 3, she will be able to blow out 2 candles
successfully, since the tallest candles are of height of height 4 and there are 2 such candles.

Example 2: 
4
3,2,1,3 
The result is 2 because the tallest candles are of height 3 and they are only 2.

Example 3:
7
3,2,1,3,6,2,1
The result is 1 because the tallest candle is of height 6 and there's only 1.

*/

const blowCandles = (candles) => {
  return candles.reduce((acc, candle) => {
    if (candle > acc.greater) {
      return { count: 1, greater: candle }
    } else if (candle === acc.greater) {
      return { count: acc.count + 1, greater: candle }
    }
    return acc
  }, { count: 0, greater: 0 }).count

  /*
  let greater = 0
  let count = 0

  for(let i=0;i<candles.length;i++) {
    if (candles[i] > greater) {
      count = 1
      greater = candles[i]
    } else if (candles[i] === greater) {
      count++
    }
  }

  return count*/
}

assert.deepEqual(blowCandles([4, 4 ,1 ,3]), 2)
assert.deepEqual(blowCandles([3, 2, 1, 3]), 2)
assert.deepEqual(blowCandles([3, 2, 1, 3, 6, 2, 1]), 1)

console.info('success 01')
  
/* Q2

Prime number is a number that is divisible by only 1 and itself
1 is not a prime number
2 is a prime number
Write a method that determines if a number is a prime number or not
Return true if it is a prime number, else return false
*/
const isPrimeNumber = (number) => {
  for (let i=2;i<number;i++)
    if (number % i === 0) 
      return false
  return true
}

assert.deepEqual(isPrimeNumber(1), true)
assert.deepEqual(isPrimeNumber(2), true)
assert.deepEqual(isPrimeNumber(5), true)
assert.deepEqual(isPrimeNumber(13), true)
assert.deepEqual(isPrimeNumber(17), true)
assert.deepEqual(isPrimeNumber(4), false)
assert.deepEqual(isPrimeNumber(6), false)
assert.deepEqual(isPrimeNumber(97), true)
assert.deepEqual(isPrimeNumber(89), true)
assert.deepEqual(isPrimeNumber(10), false)

console.info('success 02')

/* Q3
Assume we have a list of words from the English dictionary, like: 

EnglishWords:["water","big","apple","watch","banana","york","amsterdam","orange","macintosh","bottle","book"]

And another long list of string to process, write a function to identify ""compound words"" and return them:

input: ["paris","applewatch","ipod","amsterdam","bigbook","orange","waterbottle"]
output: ["applewatch","bigbook","waterbottle"] 

*/
const findCompoundWords = (input) => {
  const englishWords = ["water", "big", "apple", "watch", "banana", "york", "amsterdam", "orange", "macintosh", "bottle", "book"]

  return input.reduce((output, compoundWord) => {
    const count = englishWords.reduce((sum, word) => {
      if (compoundWord.indexOf(word) > -1) {
        sum+= 1
      }
      return sum
    }, 0)

    if (count > 1) {
      output.push(compoundWord)
    }

    return output
  }, [])
}

assert.deepEqual(
  findCompoundWords(
    ["applewatch","ipod","amsterdam","bigbook","orange","waterbottle"]
  ),
  ["applewatch","bigbook","waterbottle"]
)

console.info('success 03')
