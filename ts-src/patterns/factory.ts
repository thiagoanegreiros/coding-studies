interface Car {
  drive(): void;
}

class Sedan implements Car {
  drive(): void {
    console.log("Driving a Sedan car.");
  }
}

class SUV implements Car {
  drive(): void {
    console.log("Driving an SUV car.");
  }
}

class Hatchback implements Car {
  drive(): void {
    console.log("Driving a Hatchback car.");
  }
}

enum CarType {
  Sedan = "sedan",
  SUV = "suv",
  Hatchback = "hatchback",
}

class CarFactory {
  createCar(type: CarType): Car {
    switch (type) {
      case CarType.Sedan:
        return new Sedan();
      case CarType.SUV:
        return new SUV();
      case CarType.Hatchback:
        return new Hatchback();
      default:
        throw new Error("Invalid car type.");
    }
  }
}

// Usage example
const carFactory = new CarFactory();

const sedanCar = carFactory.createCar(CarType.Sedan);
sedanCar.drive(); // Output: Driving a Sedan car.

const suvCar = carFactory.createCar(CarType.SUV);
suvCar.drive(); // Output: Driving an SUV car.

const hatchbackCar = carFactory.createCar(CarType.Hatchback);
hatchbackCar.drive(); // Output: Driving a Hatchback car.
