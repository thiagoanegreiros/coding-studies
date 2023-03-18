const assert = require('assert')

const findMin = (nums) => {
    let [left, right] = [0, nums.length - 1]

    while (left < right) {
        const mid = (left + right) >> 1
        const guess = nums[mid]
        const [leftNum, rightNum] = [nums[left], nums[right]]

        const isTarget = leftNum < rightNum
        if (isTarget) return leftNum

        const isTargetGreater = leftNum <= guess
        if (isTargetGreater) left = mid + 1

        const isTargetLess = guess < leftNum
        if (isTargetLess) right = mid
    }

    return nums[left]
}

assert.deepEqual(findMin([3, 4, 5, 1, 2]), 1)
assert.deepEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0)

console.info('Success')