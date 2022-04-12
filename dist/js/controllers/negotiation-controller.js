import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputDate = document.querySelector('#data');
        this.inputqtd = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        console.log(this.negotiations.list());
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
