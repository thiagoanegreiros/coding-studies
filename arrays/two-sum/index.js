const assert = require('assert')

const twoSum = (items, target) => {
    const results = {}
    for (let i=0;i<items.length;i++) {
        const itemToBeExpected = target - items[i]
        if (results[itemToBeExpected] !== undefined) {
            return [
                results[itemToBeExpected], i
            ]
        } else {
            results[items[i]] = i
        }
    }
    return undefined
}

const entry01 = [[2, 7, 11, 15], 9]
assert.deepEqual(twoSum(entry01[0], entry01[1]), [0, 1])

const entry02 = [[2, 4, 5, 7, 11, 15], 18]
assert.deepEqual(twoSum(entry02[0], entry02[1]), [3, 4])

console.info('Success')