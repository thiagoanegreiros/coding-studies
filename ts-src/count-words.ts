import assert from 'assert'

const words: string[] = ["apple", "banana", "Apple", "cherry", "apple", "banana"];

function countWords(words: string[]): Record<string, number> {
    return words.reduce((acc: Record<string, number>, word: string) => {
        const newWord = word.toLocaleLowerCase()
        acc[newWord] = (acc[newWord] || 0) + 1
        return acc
    }, {})  
  }

console.log(countWords(words));

assert.deepEqual(countWords(words), {
    "apple": 3,
    "banana": 2,
    "cherry": 1
  })

console.info('success')
