abstract class Vehicle {
    public distance: number = 0
    constructor (public name: string, public speed: number) {
        
    }
    public ride(times: number = 1): void {
        this.distance += times * this.speed
        console.info(`My ${this.constructor.name} distance ride was ${this.distance}`)
    }
}

class Car extends Vehicle {
    constructor(public name: string) {
        super(name, 5)
    }
}

const car = new Car('a')
car.ride()

car.ride()

car.ride()
