import { Printable } from "../utils/printable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Printable{
    private negotiations: Negotiation[] = [] //mesmo que : Array<Negotiation> = []

    public add(negotiation: Negotiation): void {
        this.negotiations.push(negotiation)
    }

    public list(): readonly Negotiation[] { //mesmo que : ReadonlyArray<Negotiation>
        return this.negotiations
    }
    
    public toText(): string {
        return (JSON.stringify(this.negotiations, null, 2))
    }
}