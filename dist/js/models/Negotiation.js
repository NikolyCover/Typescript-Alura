export class Negotiation {
    #data
    #qtd
    #value

    constructor(data, qtd, value) {
        this.#data = data
        this.#qtd = qtd
        this.#value = value
    }

    get data() {
        return this.#data
    }

    get qtd() {
        return this.#qtd
    }

    get value() {
        return this.#value
    } 

    get volume() {
        return this.#qtd * this.#value
    }
}