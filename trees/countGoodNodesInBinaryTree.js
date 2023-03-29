const assert = require('assert')

const prefixes = new Map()

const countAllPathsWithModK0 = function(k, costs, from_lst, to_lst) {
    const children = new Map();
    prefixes.set(from_lst[0], costs[0])
    for (let i = 0; i < from_lst.length; i++) {
      const u = from_lst[i]
      if (!children.has(u)) {
        children.set(u, [])
      }
      children.get(u).push({
        cost: costs[i+1],
        node: to_lst[i]
      })
    }
    return count(children, k)
}

const count = (root, k) => {
    const isBaseCase = root === null
    if (isBaseCase) return 0;

    return dfs(root, k)
}

const dfs = (root, k) => {
    const isGood = max <= root.val
    if (isGood) total[0]++;

    max = Math.max(max, root.val);

    count(root.left, max, total);
    count(root.right, max, total);
}

assert.deepEqual(countAllPathsWithModK0(3, [2,1,2,2,4,2,5], [0,0,1,1,2,2], [1,2,3,4,5,6]), 4)
// assert.deepEqual(countAllPathsWithModK0(2, [1,2,2,1,2], [2,2,1,2], [3,1,4,5]), 6)
// assert.deepEqual(countAllPathsWithModK0(3, [2,3,0,3,0], [2,3,3,3], [3,1,4,5]), 7)

// assert.deepEqual(countAllPathsWithModK0(2, [1,1,1,1], [0,0,3], [1,3,2]), 3)
// assert.deepEqual(countAllPathsWithModK0(2, [1,2,2,1,2], [0,0,1,1], [1,3,2,4]), 6)

console.info('Success')