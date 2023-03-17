const assert = require('assert')

const countAllPathsWithModK0 = (k, costs, from_lst, to_lst) => {
  const children = new Map();

  for (let i = 0; i < from_lst.length; i++) {
    const u = from_lst[i]
    if (!children.has(u)) {
      children.set(u, [])
    }
    children.get(u).push(to_lst[i])
  }

  const prefixes = new Map()
  prefixes.set(0, 1)

  const dfs = (n, s) => {
    let result = 0
    const curr = (s + costs[n]) % k

    if (!prefixes.has(curr)) {
      prefixes.set(curr, 0)
    }
    result += prefixes.get(curr)
    prefixes.set(curr, prefixes.get(curr) + 1)
    const childrenList = children.get(n) || []
    for (let i = 0; i < childrenList.length; i++) {
      const childrenValue = dfs(childrenList[i], curr)
      result += childrenValue
    }
    prefixes.set(curr, prefixes.get(curr) - 1)
    return result
  }
  return dfs(0, 0)
}

assert.deepEqual(countAllPathsWithModK0(3, [2,1,2,2,4,2,5], [0,0,1,1,2,2], [1,2,3,4,5,6]), 4)
// assert.deepEqual(countAllPathsWithModK0(2, [1,1,1,1], [0,0,3], [1,3,2]), 3)
// assert.deepEqual(countAllPathsWithModK0(2, [1,2,2,1,2], [0,0,1,1], [1,3,2,4]), 6)

console.info('Success')