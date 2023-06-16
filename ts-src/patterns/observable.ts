interface Observer {
    update(data: any): void;
}

interface Observable {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(data: any): void;
}

class ConcreteObservable implements Observable {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data: any): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    // Example method that triggers a change and notifies observers
    performAction(): void {
        // Some action logic...

        // Notify observers with the updated data
        this.notifyObservers('Data has changed!');
    }
}

class ConcreteObserver implements Observer {
    update(data: any): void {
        console.log('Received update:', data);
    }
}

// Usage
const observable = new ConcreteObservable();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

observable.addObserver(observer1);
observable.addObserver(observer2);

observable.performAction();
// Output:
// Received update: Data has changed!
// Received update: Data has changed!

observable.removeObserver(observer2);

observable.performAction();
// Output:
// Received update: Data has changed!
