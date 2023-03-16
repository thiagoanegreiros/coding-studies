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