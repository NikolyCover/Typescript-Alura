import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"

export class NegotiationsView {
    private element: HTMLElement

    constructor(selector: string) {
        this.element = document.querySelector(selector)
    }

    template(model: Negotiations): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </tread>
            <tbody>
                ${model.list().map(negotiation => {
                    console.log(negotiation.date.getDate)
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                            <td>${negotiation.qtd}</td>
                            <td>${negotiation.value}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }

    update(model: Negotiations): void {
        const template = this.template(model)
        this.element.innerHTML = template
    }
}