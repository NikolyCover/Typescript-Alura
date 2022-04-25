import { Model } from "../interfaces/Model.js"
export class Negotiation implements Model<Negotiation> {

    constructor(
        private _date: Date,
        public readonly qtd: number,
        public readonly value: number
    ) {}
    //é a mesma coisa que criar os atributos da classe e atribuir a eles os argumentos passados no construtor

    public static createFrom(dateStr: string, qtdStr: string, valueStr: string): Negotiation {
        const date = new Date(dateStr.replace(/-/g, ','))
        const qtd = parseInt(qtdStr)
        const value = parseFloat(valueStr)

        return new Negotiation(date, qtd, value)
    }

    get date(): Date {
        return new Date(this._date.getTime())
    }

    get volume(): number {
        return this.qtd * this.value
    }

    public toText(): string {
        return `
            Data: ${this.date},
            Quantidade: ${this.qtd},
            Valor: ${this.value}
        `
    }

    public isEqual(negotiation: Negotiation): boolean {
        return this.date.getDate() === negotiation.date.getDate()
        && this.date.getMonth() === negotiation.date.getMonth()
        && this.date.getFullYear() === negotiation.date.getFullYear()
    }
}