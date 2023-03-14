const assert = require('assert')

const ValidAnagram = (s, t) => {
    if (s.length !== t.length) return false
    const hash = {}
    for (let i=0;i<s.length;i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    for (let i=0;i<t.length;i++) {
        if (!hash[t[i]]) {
            return false
        } else {
            hash[t[i]]--
        }
    }
    return true
}

assert.deepEqual(ValidAnagram('ronaldo', 'odlanor'), true)
assert.deepEqual(ValidAnagram('ronaldq', 'odlanor'), false)

console.info('Success')