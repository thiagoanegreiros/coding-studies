function MyNode (val, left = null, right = null ) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const buildTreeLeekCode = (inputArray) => {
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

module.exports = {
    buildTreeLeekCode
}