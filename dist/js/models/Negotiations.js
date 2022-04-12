export class Negotiations {
    constructor() {
        this.negotiations = []; //mesmo que : Array<Negotiation> = []
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
}
