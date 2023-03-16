const assert = require('assert')
const { linkedList } = require('./helper')

const reverseList = function (head) {
    const isBaseCase = !head?.next
    if (isBaseCase) return head

    return dfs(head);                   /* Time O(N) | Space O(N) */
}

const dfs = (curr) => {
    const prev = reverseList(curr.next);/* Time O(N) | Space O(N) */

    curr.next.next = curr;
    curr.next = null;

    return prev;
}

assert.deepEqual(
    reverseList(
        linkedList([1,2,3,4,5])
    ),
    linkedList([5,4,3,2,1])
)

assert.deepEqual(
    reverseList(
        linkedList([1,10,2,3,4,5])
    ),
    linkedList([5,4,3,2,10,1])
)

console.info('Success')