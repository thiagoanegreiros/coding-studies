const assert = require('assert')

const trap = (height) => {
    const [maxLeft, maxRight, minLeftRight] = [[], [], []]

    let current = 0
    for(let i = 0; i < height.length; i++) {
     maxLeft.push(current);
     current  = Math.max(current, height[i])
    }
    current = 0
    for(let i = height.length - 1; i > -1; i--) {
        maxRight.push(current);
        current = Math.max(current, height[i])
    }
    // because the elements were added reverse. 
    maxRight.reverse()

    for(let i = 0; i < height.length; i++) {
        const minofLeftRight = Math.min(maxLeft[i],maxRight[i])
        minLeftRight.push(minofLeftRight)
    }

    let water = 0
    for(let i = 0; i < height.length; i++) {
        if(minLeftRight[i] - height[i] > 0) {
            water += minLeftRight[i] - height[i]
        }
    }

    return water;
}

assert.deepEqual(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)
assert.deepEqual(trap([4,2,0,3,2,5]), 9)

console.info('Success')