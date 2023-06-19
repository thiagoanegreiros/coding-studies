// Example: Type Guards and Type Assertions

// Type Guard: Function to check if a value is a string
function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
  
  // Type Guard: Function to check if a value is a number
  function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
  
  // Type Assertion: Explicitly overriding the type
  function calculateLength(value: string | number): number {
    if (isString(value)) {
      // Using type guard to narrow down the type to string
      return value.length;
    } else {
      // Using type assertion to explicitly override the type to number
      return value as number;
    }
  }
  
  // Usage
  
  console.log(calculateLength('Hello')); // Output: 5
  console.log(calculateLength(42)); // Output: 42
  
  // Using type assertion to override the type
  console.log(calculateLength(true as any)); // Output: NaN
  