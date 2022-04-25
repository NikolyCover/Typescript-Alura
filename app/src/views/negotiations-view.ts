import { escape } from "../decorators/escape.js"
import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"
import { View } from "./view.js"

export class NegotiationsView extends View<Negotiations> {

    @escape
    protected template(model: Negotiations): string {
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
                    return `
                        <tr>
                            <td>${this.format(negotiation.date)}</td>
                            <td>${negotiation.qtd}</td>
                            <td>${negotiation.value}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }

    private format(date: Date): string {
        return new Intl.DateTimeFormat().format(date)
    }
}