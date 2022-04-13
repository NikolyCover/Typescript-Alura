import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"
import { MessageView } from "../views/message-view.js"
import { NegotiationsView } from "../views/negotiations-view.js"

export class NegotiationController {
    private inputDate: HTMLInputElement
    private inputqtd: HTMLInputElement
    private inputValue: HTMLInputElement
    private negotiations = new Negotiations()
    private negotiationsView = new NegotiationsView('#negotiationsView')
    private messageView = new MessageView('#messageView')

    constructor() {
        this.inputDate = document.querySelector('#data')
        this.inputqtd = document.querySelector('#quantidade')
        this.inputValue = document.querySelector('#valor')
    }

    add(): void {
        const negotiation = this.createNegotiation()
        this.negotiations.add(negotiation)
        this.negotiationsView.update(this.negotiations)
        this.messageView.update('Negociação adicionada com sucesso!')
        this.cleanForm()
    }
    
    createNegotiation(): Negotiation {
        const date = new Date(this.inputDate.value.replace(/-/g, ','))
        const qtd = parseInt(this.inputqtd.value)
        const value = parseFloat(this.inputValue.value)

        return new Negotiation(date, qtd, value)
    }

    cleanForm(): void {
        this.inputDate.value = ''
        this.inputqtd.value = ''
        this.inputValue.value = ''
        this.inputDate.focus()
    }
}