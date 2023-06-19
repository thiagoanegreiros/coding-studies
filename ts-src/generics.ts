class Queue<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }
  
  // Usage
  
  // Creating a queue of numbers
  const numberQueue = new Queue<number>();
  numberQueue.enqueue(1);
  numberQueue.enqueue(2);
  numberQueue.enqueue(3);
  
  while (!numberQueue.isEmpty()) {
    const num = numberQueue.dequeue();
    console.log(num); // Output: 1, 2, 3
  }
  
  // Creating a queue of strings
  const stringQueue = new Queue<string>();
  stringQueue.enqueue('Hello');
  stringQueue.enqueue('World');
  stringQueue.enqueue('!');
  
  while (!stringQueue.isEmpty()) {
    const str = stringQueue.dequeue();
    console.log(str); // Output: 'Hello', 'World', '!'
  }
  
  // Trying to create a queue of booleans (Type constraint enforcement)
  const booleanQueue = new Queue<boolean>();
  booleanQueue.enqueue(true);
  booleanQueue.enqueue(false);
  booleanQueue.enqueue(true);
  
  while (!booleanQueue.isEmpty()) {
    const bool = booleanQueue.dequeue();
    console.log(bool); // Output: true, false, true
  }
  
  // Trying to enqueue a number into a string queue (Type constraint enforcement)
  stringQueue.enqueue(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  

