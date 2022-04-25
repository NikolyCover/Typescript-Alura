import { Negotiation } from "../models/negotiation.js";
export class NegotationsService {
    getNegotiationsOfTheDay() {
        return fetch('http://localhost:8080/dados')
            .then(answer => answer.json())
            .then((data) => {
            return data.map(datum => {
                return new Negotiation(new Date(), datum.vezes, datum.montante);
            });
        });
    }
}
