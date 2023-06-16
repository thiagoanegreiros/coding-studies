let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

// list ordered
console.log(cities.sort((a, b) => b.population - a.population).reduce((acc, city, index) => {
    acc.push({
        ...city,
        index: index + 1
    })
    return acc
}, []))

// max number
console.log(cities.reduce((acc, curr) =>{
    if (curr.population > acc) return curr.population
    return acc
}, 0))

console.log(cities.map((i) => ({...i, population: i.population * 2})))

console.log(cities.filter((i) => i.name !== 'New York'))

let n = [[-9, 87], [72], 452, [32, -9]]
let flatten = n.reduce((acc, v) => acc.concat(v), [])
console.log(flatten)
