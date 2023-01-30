"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerHitCard = ({ playerCards, handIndex, nextCard, }) => {
    playerCards.map((v, i) => (i === handIndex ? [v, nextCard()] : v));
};
exports.default = playerHitCard;
