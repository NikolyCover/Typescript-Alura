export class NegotiationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
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
            console.log(negotiation.date.getDate);
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                            <td>${negotiation.qtd}</td>
                            <td>${negotiation.value}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
