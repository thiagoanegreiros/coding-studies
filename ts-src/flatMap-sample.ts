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
console.log(...new Set(allAuthors));
