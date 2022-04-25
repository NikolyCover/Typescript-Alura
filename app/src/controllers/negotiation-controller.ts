import { domInjector } from "../decorators/domInject.js"
import { inspect } from "../decorators/inspect.js"
import { logRuntime } from "../decorators/log-runtime.js"
import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"
import { MessageView } from "../views/message-view.js"
import { NegotiationsView } from "../views/negotiations-view.js"
import { DaysOfWeek } from "./enums/days-of-week.js"

export class NegotiationController {
    @domInjector('#data')
    private inputDate: HTMLInputElement

    @domInjector('#quantidade')
    private inputqtd: HTMLInputElement

    @domInjector('#valor')
    private inputValue: HTMLInputElement
    private negotiations = new Negotiations()
    private negotiationsView = new NegotiationsView('#negotiationsView')
    private messageView = new MessageView('#messageView')

    @inspect
    @logRuntime()
    public add(): void {
        const negotiation = Negotiation.createFrom(
            this.inputDate.value,
            this.inputqtd.value,
            this.inputValue.value
        )

        if(!this.isWorkingDay(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas')
            return
        }

        this.negotiations.add(negotiation)
        this.cleanForm()
        this.updateView()
    }

    private cleanForm(): void {
        this.inputDate.value = ''
        this.inputqtd.value = ''
        this.inputValue.value = ''
        this.inputDate.focus()
    }

    private updateView(): void {
        this.negotiationsView.update(this.negotiations)
        this.messageView.update('Negociação adicionada com sucesso!')
    }

    private isWorkingDay(date: Date): boolean {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.Saturday
    }
}