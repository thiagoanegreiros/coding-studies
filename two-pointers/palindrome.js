const assert = require('assert')

const isPalindrome = function(s) {
    const sLength = s.length
    let newS = ''
    for (let i = 0; i < sLength; i++) {
        newS += s[i].toLowerCase().replace(/[^a-z0-9]/gi, '')
    }

    let leftIndex = 0
    let rightIndex = newS.length - 1

    while (leftIndex < rightIndex) {
        if (newS[leftIndex] !== newS[rightIndex]) {
            return false
        } else {
            leftIndex++
            rightIndex--
        }
    }

    return true
}

assert.deepEqual(isPalindrome("A man, a plan, a canal: Panama"), true)
assert.deepEqual(isPalindrome("race a car"), false)
assert.deepEqual(isPalindrome("kk la"), false)
assert.deepEqual(isPalindrome(" "), true)

console.info('Success')