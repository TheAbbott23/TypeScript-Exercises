import ShippingContainer from "./ShippingContainer";

export class HeavyContainer implements ShippingContainer {
    tareWeight: number;
    destination: string;
    cargoWeight: number;
    constructor(newTareWeight: number, newDestination: string, newCargoWeight: number = 0) {
        this.tareWeight = newTareWeight;
        this.destination = newDestination;
        this.cargoWeight = newCargoWeight;

    }

 getGrossWeight():number {
    return this.tareWeight + this.cargoWeight;
 }
   

}