export class Negotiation {
    private _data: Date
    private _qtd: number
    private _value: number

    constructor(data: Date, qtd: number, value: number) {
        this._data = data
        this._qtd = qtd
        this._value = value
    }

    get data(): Date {
        return this._data
    }

    get qtd(): number {
        return this._qtd
    }

    get value(): number {
        return this._value
    } 

    get volume(): number {
        return this._qtd * this._value
    }
}