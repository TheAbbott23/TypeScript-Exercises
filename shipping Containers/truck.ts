import ShippingContainer from "./ShippingContainer";
import { Transporter } from "./transporter";

export class Truck implements Transporter {
    maxWeight: number;
    container: ShippingContainer | null = null;

    constructor(maxWeight: number) {
        this.maxWeight = maxWeight;
    }

    addContainer (container: ShippingContainer): void {
        this.container = container;
    }

    getTotalWeight (): number {
        if (this.container === null) {
            return 0;
        }else {
            return this.container.getGrossWeight();
        }
    }

    isOverWeight(): boolean {
        return this.getTotalWeight() > this.maxWeight;
    }

}