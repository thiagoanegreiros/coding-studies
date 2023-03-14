const assert = require('assert')

const binarySearch = (items, target) => {
    let leftIndex = 0
    let rightIndex = items.length - 1
    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((rightIndex + leftIndex) / 2)
        if (items[middleIndex] === target) {
            return middleIndex
        } else if (target > items[middleIndex]) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }
    return -1
}

const entry01 = [[2, 7, 11, 15], 11]
assert.deepEqual(binarySearch(entry01[0], entry01[1]), 2)

const entry02 = [-1, 0, 2, 7, 11, 13, 14, 15]
assert.deepEqual(binarySearch(entry02, 15), 7)
// assert.deepEqual(binarySearch(entry02, -1), 0)

console.info('Success')