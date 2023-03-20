const obj = {
    notMod3notMod5: (i) => {
        console.log(i)
    },
    mod3notMod5: () => {
        console.log('Fizz')
    },
    mod3mod5: () => {
        console.log('FizzBuzz')
    },
    notMod3mod5: () => {
        console.log('Buzz')
    }
}

const fizzBuzz = (array) => {
    for(let i=0;i<array.length;i++) {
        const fizz = array[i] % 3 === 0 ? 'mod3' : 'notMod3' 
        const buzz = array[i] % 5 === 0 ? 'mod5' : 'notMod5' 
        obj[fizz + buzz](i)
    }
}

fizzBuzz([1,2,3,4,5])
fizzBuzz([2,1,3])

console.info('Success')