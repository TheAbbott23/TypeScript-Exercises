
class Vehicle {
    make: string; 
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
};

class Car extends Vehicle {
   
    start () {
        console.log("starting");
    }
    
    
    

};

class Bike extends Vehicle {
    pedal() {
        console.log("pedaling");
    }
};



