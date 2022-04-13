import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.inputDate = document.querySelector('#data');
        this.inputqtd = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.cleanForm();
    }
    createNegotiation() {
        const date = new Date(this.inputDate.value.replace(/-/g, ','));
        const qtd = parseInt(this.inputqtd.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, qtd, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputqtd.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
