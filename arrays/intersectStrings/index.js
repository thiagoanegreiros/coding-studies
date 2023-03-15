const assert = require('assert')

function intersectStrings(str1, str2) {
    const str1Size = str1.split("").length
    const str2Size = str2.split("").length
    const map1 = {}
    const map2 = {}

    for (let i = 0; i < str1Size; i++) {
        if (!map1[str1[i]])
            map1[str1[i]] = 1
        else
            map1[str1[i]]++
    }
    for (let i = 0; i < str2Size; i++) {
        if (map1[str2[i]]) {
            map2[str2[i]] = 1
    
    }
 }
 return Object.keys(map2).join("")
}

assert.deepEqual(intersectStrings('ronaldo', 'ricardo'), 'rado')
assert.deepEqual(intersectStrings('kuririn', 'jefferson'), 'rn')

console.info('Success')