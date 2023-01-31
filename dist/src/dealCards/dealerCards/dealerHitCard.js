"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dealerHitCard = ({ dealerCards, nextCard }) => {
    return [...dealerCards, nextCard()];
};
exports.default = dealerHitCard;
