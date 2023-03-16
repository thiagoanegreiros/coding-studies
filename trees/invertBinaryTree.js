const assert = require('assert')
const { buildTreeLeekCode } = require('./helper')

const invertBinaryTree = (root) => {
    if (root === null || root.length == 0) return root;
    return dfs(root);
}

const dfs = (root) => {
    const left = invertBinaryTree(root.left);
    const right = invertBinaryTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

assert.deepEqual(invertBinaryTree(buildTreeLeekCode([4,2,7,1,3,6,9])), buildTreeLeekCode([4,7,2,9,6,3,1]))
assert.deepEqual(invertBinaryTree(buildTreeLeekCode([2,1,3])), buildTreeLeekCode([2,3,1]))
assert.deepEqual(invertBinaryTree([]), [])

console.info('Success')