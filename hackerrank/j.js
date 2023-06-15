const assert = require('assert')

const lonelyinteger = (a) => {
    let map = {}
    
    for (let i=0;i< a.length;i++) {
        console.log(`a[i] ==> ${a[i]}`)
        if(!map[a[i]]) {
            map[a[i]] = 1
        } else {
            map[a[i]]++
        }
    }

    let ret = 0
    Object.keys(map).forEach((i) => {
        if (map[i] === 1) {
            ret = i 
        }
    })
    return ret
}

assert.deepEqual(lonelyinteger([1, 2, 1, 2, 0, 3, 0]), 3)

console.info('Success')