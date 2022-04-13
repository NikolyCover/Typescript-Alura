import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations: Negotiation[] = [] //mesmo que : Array<Negotiation> = []

    add(negotiation: Negotiation): void {
        this.negotiations.push(negotiation)
    }

    list(): readonly Negotiation[] { //mesmo que : ReadonlyArray<Negotiation>
        return this.negotiations
    }
}