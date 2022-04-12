import { Negotiation } from "./Negotiation.js";

export class Negotiations {
    private negotiations: Array<Negotiation> = []

    add(negotiation: Negotiation): void {
        this.negotiations.push(negotiation)
    }

    list(): ReadonlyArray<Negotiation> {
        return this.negotiations
    }
}