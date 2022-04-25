export class Negotiation {
    constructor(_date, qtd, value) {
        this._date = _date;
        this.qtd = qtd;
        this.value = value;
    }
    static createFrom(dateStr, qtdStr, valueStr) {
        const date = new Date(dateStr.replace(/-/g, ','));
        const qtd = parseInt(qtdStr);
        const value = parseFloat(valueStr);
        return new Negotiation(date, qtd, value);
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get volume() {
        return this.qtd * this.value;
    }
    toText() {
        return `
            Data: ${this.date},
            Quantidade: ${this.qtd},
            Valor: ${this.value}
        `;
    }
    isEqual(negotiation) {
        return this.date.getDate() === negotiation.date.getDate()
            && this.date.getMonth() === negotiation.date.getMonth()
            && this.date.getFullYear() === negotiation.date.getFullYear();
    }
}
