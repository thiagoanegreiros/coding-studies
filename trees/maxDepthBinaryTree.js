const assert = require('assert')
const { buildTreeLeekCode } = require('./helper')

const maxDepthBinaryTree = (root) => {
    if (root === null || root.length == 0) return 0
    return dfs(root)
}

const dfs = (root) => {
    const left = maxDepthBinaryTree(root.left)
    const right = maxDepthBinaryTree(root.right)

    return 1 + Math.max(left, right)
}

assert.deepEqual(maxDepthBinaryTree(buildTreeLeekCode([4,2,7,1,3,6,9])), 3)
assert.deepEqual(maxDepthBinaryTree(buildTreeLeekCode([2,1,3])), 2)
assert.deepEqual(maxDepthBinaryTree([]), 0)

console.info('Success')