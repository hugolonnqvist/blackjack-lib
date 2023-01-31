"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerHitCard = ({ playerCards, handIndex, nextCard, }) => {
    return playerCards.map((v, i) => (i === handIndex ? [...v, nextCard()] : v));
};
exports.default = playerHitCard;
