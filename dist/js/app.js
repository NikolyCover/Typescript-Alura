import { Negotiation } from './models/Negotiation.js';
const negotiation = new Negotiation(new Date(), 10, 100);
console.log(negotiation.volume);
