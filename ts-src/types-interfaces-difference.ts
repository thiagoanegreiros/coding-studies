// Declaration Merging
// When two interfaces with the same name are declared, it can merge these two interfaces
// This cannot be done with types
interface Person {
    name: string
}

interface Person {
    age: number
}
// Declaration Merging

const john: Person = {
    name: "John",
    age: 26,
}

type PersonT = {
    name: string;
    age: number;
}

const johnT: PersonT = {
    name: "John",
    age: 26,
}

console.log(john)
console.log(johnT)


// Working with interfaces
// it can extend interfaces, types and classes
interface PersonNameInterface { name: string }
interface Person1 extends PersonNameInterface { age: number }

type PersonNameType = { name: string }
interface Person2 extends PersonNameType { age: number }

class PersonClass { name = "Jhon" }
interface Person3 extends PersonClass { age: number }

console.log({ name: 'a', age: 1} as PersonNameInterface)
console.log({ name: 'a', age: 1} as PersonNameType)
console.log({ name: 'a', age: 1} as Person3)


// Working with types
// We can combine types using &
type PersonNameTypeT = { name: string; }
type Person1T = PersonNameTypeT & { age: number; }

interface PersonNameInterfaceT { name: string; }
type Person2T = PersonNameInterfaceT & { age: number; }

// We can combine two interfaces to create intersection type but cannot create intersection interfaces
interface PersonNameInterfaceT { name: string; }
interface PersonAgeInterfaceT { age: number; }
type Person3T = PersonNameInterfaceT & PersonAgeInterfaceT

console.log({ name: 'a', age: 1} as PersonNameInterfaceT)
console.log({ name: 'a', age: 1} as Person2T)
console.log({ name: 'a', age: 1} as Person3T)

// TypeScript is a Structural Type System. 
// A structural type system means that when comparing types, 
// TypeScript only takes into account the members on the type. 
// This is in contrast to nominal type systems, where you could create two types but could not assign them to each other

type myType1 = {
    age: number
}

type myType2 = {
    name: string
}

type finalType = myType1 | myType2

const obj: finalType = { age: 1 }
const obj2: finalType = { name: '' }

interface finalInterface {
    prop1: finalType
}

const obj3: finalInterface = { prop1: { age: 1} } 

// Use interfaces when:

// A new object or an object method needs to be defined.
// You wish to benefit from declaration merging.

// Use types when:

// You need to define a primitive-type alias
// Defining a union
