const assert = require('assert')

let prefixes
let paths = 0
let from0 = 0
let cost0 = 0

const getInitialPostion = (items) => {
  return items.sort()[0]
}

const countAllPathsWithModK0 = function(k, costs, from_lst, to_lst) {
    const initial = getInitialPostion([...from_lst, ...to_lst])

    paths = 0
    from0 = from_lst[0]
    cost0 = costs[from_lst[initial]]
    prefixes = new Map()

    prefixes.set(from0, cost0)
    const tree = new Map()

    for (let i = 0; i < from_lst.length; i++) {
      const u = from_lst[i]
      if (!tree.has(u)) {
        tree.set(u, [])
      }
      tree.get(u).push({
        cost: costs[to_lst[i] - initial],
        node: to_lst[i]
      })
    }

    count(from0, tree, k)

    return paths
}

const count = (treeNodeNumber, tree, k) => {
    const treeNode = tree.get(treeNodeNumber)
    const isBaseCase = treeNode === null || treeNode === undefined
    if (isBaseCase) return -1

    return dfs(treeNode, tree, k)
}

const dfs = (treeNode, tree, k) => {
  for (let i = 0; i < treeNode.length; i++) {
    const node = treeNode[i]

    // if (node.node === 3) {
    //   console.info('ha')
    // }
    prefixes.set(node.node, node.cost)
    // count(node.node, tree, k)
    const hasChildren = count(node.node, tree, k)

    let sum = 0
    for (let [_key, value] of prefixes) {
      sum += value
    }

    let sumWithNotop = 0
    prefixes.delete(from0)
    for (let [_key, value] of prefixes) {
      sumWithNotop += value
    }
    prefixes.set(from0, cost0)

    if (hasChildren === -1 && node.cost % k === 0) paths++
    if (sum % k === 0) paths++
    if (sumWithNotop % k === 0) paths++

    prefixes.delete(node.node)
  }
}

assert.deepEqual(countAllPathsWithModK0(3, [2,1,2,2,4,2,5], [0,0,1,1,2,2], [1,2,3,4,5,6]), 4)
assert.deepEqual(countAllPathsWithModK0(2, [1,1,1,1], [0,0,3], [1,3,2]), 3)
assert.deepEqual(countAllPathsWithModK0(2, [1,2,2,1,2], [0,0,1,1], [1,3,2,4]), 6)

// assert.deepEqual(countAllPathsWithModK0(2, [1,2,2,1,2], [2,2,1,2], [3,1,4,5]), 6)
assert.deepEqual(countAllPathsWithModK0(3, [2,3,0,3,0], [2,3,3,3], [3,1,4,5]), 7)

console.info('Success')