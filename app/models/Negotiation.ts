export class Negotiation {

    constructor(
        private _date: Date,
        public readonly qtd: number,
        public readonly value: number
    ) {}
    //é a mesma coisa que criar os atributos da classe e atribuir a eles os argumentos passados no construtor

    get date(): Date {
        return new Date(this._date.getTime())
    }

    get volume(): number {
        return this.qtd * this.value
    }

    public static createFrom(dateStr: string, qtdStr: string, valueStr: string): Negotiation {
        const date = new Date(dateStr.replace(/-/g, ','))
        const qtd = parseInt(qtdStr)
        const value = parseFloat(valueStr)

        return new Negotiation(date, qtd, value)
    }
}