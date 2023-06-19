interface Person {
    name: string;
    age: number;
    address: string;
}

type PersonKey = keyof Person;
// Result: 'name' | 'age' | 'address'

const person: Person = {
    name: 'John',
    age: 30,
    address: '123 Main St',
};

function getProperty(obj: Person, key: PersonKey): any {
    return obj[key];
}

const nameValue = getProperty(person, 'name'); // 'John'
const ageValue = getProperty(person, 'age'); // 30

// Using mapped types to create new types based on existing ones:
type ReadonlyPerson = Readonly<Person>;
// Result: { readonly name: string; readonly age: number; }

type PartialPerson = Partial<Person>;
// Result: { name?: string; age?: number; }

type NullablePerson = Partial<Person> | null;
// Result: { name?: string; age?: number; } | null

type PickPerson = Pick<Person, 'name'>;
// Result: { name: string; }

