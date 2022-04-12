export class Negotiation {
    constructor(_date, qtd, value) {
        this._date = _date;
        this.qtd = qtd;
        this.value = value;
    }
    //é a mesma coisa que criar os atributos da classe e atribuir a eles os argumentos passados no construtor
    get date() {
        return Object.assign({}, this._date);
    }
    get volume() {
        return this.qtd * this.value;
    }
}
