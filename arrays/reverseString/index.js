const assert = require('assert')

const reverseString = (s) => {
    s = s.split('')
    let rightIndex = s.length - 1
    let leftIndex = 0

    while (leftIndex < rightIndex) {
        const mem = s[leftIndex]
        s[leftIndex] = s[rightIndex]
        s[rightIndex] = mem
        leftIndex++
        rightIndex--
    }

    return s.join('')
}

const reverseJS = (s) => {
    return s.split('').reverse().join('')
}

const reverseRecursiveString = (str) => {
    if (str === '') return ''
    return reverseRecursiveString(str.substr(1)) + str.charAt(0)
}

assert.deepEqual(reverseString('teste'), 'etset')
assert.deepEqual(reverseJS('teste'), 'etset')
assert.deepEqual(reverseRecursiveString('teste'), 'etset')
assert.deepEqual(reverseString('ronaldo'), 'odlanor')

console.info('Success')