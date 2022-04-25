var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
import { logRuntime } from "../decorators/log-runtime.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { DaysOfWeek } from "./enums/days-of-week.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#data');
        this.inputqtd = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputqtd.value, this.inputValue.value);
        if (!this.isWorkingDay(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negotiations.add(negotiation);
        this.cleanForm();
        this.updateView();
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputqtd.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
    isWorkingDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.Saturday;
    }
}
__decorate([
    inspect,
    logRuntime()
], NegotiationController.prototype, "add", null);
