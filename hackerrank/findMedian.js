const assert = require('assert')

function findMedian(arr) {
    const sa = arr.sort((a, b) => (a - b))
    if (sa.length % 2 === 0) {
        const ix = sa.length / 2
        return (sa[ix - 1] + sa[ix]) / 2
    } else {
        return sa[Math.floor(sa.length / 2)]
    }
}

assert.equal(findMedian([1, 2, 3, 4, 5]), 3)
assert.equal(findMedian([0, 1, 4, 6, 7, 8]), 5)