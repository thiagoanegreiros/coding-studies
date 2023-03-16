const assert = require('assert')
const { buildTreeLeekCode } = require('./helper')

const goodNodes = function(root, max = -Infinity, total = [ 0 ]) {
    count(root, max, total);
    return total[0]
}

const count = (root, max, total) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root, max, total);
}

const dfs = (root, max, total) => {
    const isGood = max <= root.val
    if (isGood) total[0]++;

    max = Math.max(max, root.val);

    count(root.left, max, total);
    count(root.right, max, total);
}

assert.deepEqual(goodNodes(buildTreeLeekCode([3,1,4,3,null,1,5])), 4)
assert.deepEqual(goodNodes(buildTreeLeekCode([3,3,null,4,2])), 3)

console.info('Success')