const assert = require('assert')

const twoSum = function(numbers, target) {
    let leftIndex = 0
    let rightIndex = numbers.length - 1
    while(leftIndex < rightIndex) {
        if (numbers[leftIndex] + numbers[rightIndex] === target) {
            return [++leftIndex, ++rightIndex]
        } else if (numbers[leftIndex] + numbers[rightIndex] > target) {
            rightIndex--
        } else {
            leftIndex++
        }
    }
}

assert.deepEqual(twoSum([2,7,11,15,89,100], 189), [5,6])
assert.deepEqual(twoSum([2,7,11,15], 9), [1,2])
assert.deepEqual(twoSum([2,3,4], 6), [1,3])
assert.deepEqual(twoSum([-1,0], -1), [1,2])

console.info('Success')