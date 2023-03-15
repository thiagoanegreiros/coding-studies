const assert = require('assert')

function MyNode (val, left = null, right = null ) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function buildTreeLeekCode(inputArray) {
    const root = new MyNode(inputArray.shift());
    const queue = [root];
    while (queue.length > 0 && inputArray.length > 0) {
        const curNode = queue.shift();
        const leftVal = inputArray.shift();
        const rightVal = inputArray.shift();
        if (leftVal !== null) {
            curNode.left = new MyNode(leftVal);
            queue.push(curNode.left);
        }
        if (rightVal !== null) {
            curNode.right = new MyNode(rightVal);
            queue.push(curNode.right);
        }
    }
    return root;
}

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