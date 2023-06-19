type numberFunction = (val: number) => number

const add1: numberFunction = (val: number) => val + 1
const add2: numberFunction = (val: number) => val + 2
const mult2: numberFunction = (val: number) => val * 2
const div2: numberFunction = (val: number) => val / 2

const compose = (...funcs: numberFunction[]) => (number: number) => funcs.reduceRight((acc, func) => func(acc), number)

const math = compose(add1, div2, add2, mult2)(2)

console.info(math)
