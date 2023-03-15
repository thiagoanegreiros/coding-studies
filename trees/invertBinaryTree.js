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