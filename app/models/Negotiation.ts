export class Negotiation {
    private _data
    private _qtd
    private _value

    constructor(data, qtd, value) {
        this._data = data
        this._qtd = qtd
        this._value = value
    }

    get data() {
        return this._data
    }

    get qtd() {
        return this._qtd
    }

    get value() {
        return this._value
    } 

    get volume() {
        return this._qtd * this._value
    }
}