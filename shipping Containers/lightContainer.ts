
import ShippingContainer from "./ShippingContainer";

export default class LightContainer implements ShippingContainer {
    destination: string;
    cargoWeight: number;
    constructor(newDestination: string, newCargoWeight: number = 0) {
        this.destination = newDestination;
        this.cargoWeight = newCargoWeight;
    }

    getGrossWeight():number {
        return this.cargoWeight;
    }
};