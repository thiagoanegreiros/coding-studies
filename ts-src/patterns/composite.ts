interface FileSystemItem {
  getName(): string;
  getSize(): number;
  print(): void;
}

class File implements FileSystemItem {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  print(): void {
    console.log(`File: ${this.name} (${this.size} bytes)`);
  }
}

class Directory implements FileSystemItem {
  private name: string;
  private items: FileSystemItem[];

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let totalSize = 0;
    for (const item of this.items) {
      totalSize += item.getSize();
    }
    return totalSize;
  }

  print(): void {
    console.log(`Directory: ${this.name}`);
    for (const item of this.items) {
      item.print();
    }
  }

  addItem(item: FileSystemItem): void {
    this.items.push(item);
  }

  removeItem(item: FileSystemItem): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

// Usage example
const file1 = new File("file1.txt", 100);
const file2 = new File("file2.txt", 200);
const file3 = new File("file3.txt", 150);

const directory1 = new Directory("Folder 1");
directory1.addItem(file1);
directory1.addItem(file2);

const directory2 = new Directory("Folder 2");
directory2.addItem(file3);

const rootDirectory = new Directory("Root");
rootDirectory.addItem(directory1);
rootDirectory.addItem(directory2);
rootDirectory.print();

// Output:
// Directory: Root
// Directory: Folder 1
// File: file1.txt (100 bytes)
// File: file2.txt (200 bytes)
// Directory: Folder 2
// File: file3.txt (150 bytes)
