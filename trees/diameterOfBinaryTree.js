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

const diameterOfBinaryTree = function(root, max = [0]) {
    diameterOfTree(root, max)
    return max[0]
}

const diameterOfTree = (root, max) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root, max);
}

const dfs = (root, max) => {
    const left = diameterOfTree(root.left, max);
    const right = diameterOfTree(root.right, max);

    const diameter = left + right;
    max[0] = Math.max(max[0], diameter);

    const height = Math.max(left, right);

    return height + 1;
}

assert.deepEqual(diameterOfBinaryTree(buildTreeLeekCode([1,2,3,4,5])), 3)
assert.deepEqual(diameterOfBinaryTree(buildTreeLeekCode([2,1,3])), 2)

console.info('Success')