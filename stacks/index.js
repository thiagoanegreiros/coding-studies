const assert = require('assert')

const isValid = function(s) {
    const map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'        
    }
    const stack = []
    for (let i=0;i<s.length;i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') stack.push(map[s[i]])
        else if (stack[stack.length - 1] === s[i]) stack.pop()
        else return false
    }
    return stack.length === 0
}

assert.deepEqual(isValid("()"), true)
assert.deepEqual(isValid("()[]{}"), true)
assert.deepEqual(isValid("()[]}"), false)

console.info('Success')