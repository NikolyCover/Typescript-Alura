import { NegotiationOfTheDay } from "../interfaces/negotiation-of-the-day.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotationsService {

    public getNegotiationsOfTheDay (): Promise<Negotiation[]> {
        return fetch('http://localhost:8080/dados')
        .then(answer => answer.json())
        .then((data: NegotiationOfTheDay[]) => {
            return data.map(datum => {
                return new Negotiation(new Date(), datum.vezes, datum.montante)
            })
        })
    }
}