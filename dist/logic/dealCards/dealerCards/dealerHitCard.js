"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerHitCard = ({ dealerCards, nextCard }) => {
    return [dealerCards, nextCard()];
};
exports.default = playerHitCard;
