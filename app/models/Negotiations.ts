import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations: Negotiation[] = [] //mesmo que : Array<Negotiation> = []

    public add(negotiation: Negotiation): void {
        this.negotiations.push(negotiation)
    }

    public list(): readonly Negotiation[] { //mesmo que : ReadonlyArray<Negotiation>
        return this.negotiations
    }
}