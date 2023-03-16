const assert = require('assert')

const maxProfit = function(prices) {
    let [
        leftIndex,
        rightIndex,
        max
    ] = [0, 1, 0]
    while(rightIndex < prices.length) {
        const leftValue = prices[leftIndex]
        const rightValue = prices[rightIndex]
        if (leftValue > rightValue) {
            leftIndex = rightIndex
        }
        max = Math.max(max, rightValue - leftValue)
        rightIndex++
    }
    return max
}

assert.deepEqual(maxProfit([7,1,5,3,6,4]), 5)
assert.deepEqual(maxProfit([7,6,4,3,1]), 0)

console.info('Success')