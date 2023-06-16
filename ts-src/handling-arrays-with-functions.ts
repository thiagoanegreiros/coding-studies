interface Book {
    title: string;
    authors: string[];
}
  
const library: Book[] = [
    { title: 'Book 1', authors: ['Author 1', 'Author 2'] },
    { title: 'Book 2', authors: ['Author 3', 'Author 4'] },
    { title: 'Book 3', authors: ['Author 1'] },
];

const allAuthors = library.flatMap((book) => book.authors)

// Remove duplicates with Set
const authors: string[] = [...new Set(allAuthors)]

// Ordering by name
console.log(authors.sort((a, b) => b.localeCompare(a)))

// SHIFT and UNSHIFT

const numbers = [1, 2, 3, 4, 5];

console.log(numbers); // Output: [1, 2, 3, 4, 5]

const shiftedNumber = numbers.shift();

console.log(shiftedNumber); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

numbers.unshift(0);

console.log(numbers); // Output: [0, 2, 3, 4, 5]

// SPLICE SAMPLE

interface Person {
    id: number;
    name: string;
  }
  
const people: Person[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
];

const personIndex = people.findIndex((person) => person.id === 3);

if (personIndex !== -1) {
  people.splice(personIndex, 1);
}

console.log(people);
// Output: [{ id: 3, name: 'Charlie' }, { id: 4, name: 'David' }]
