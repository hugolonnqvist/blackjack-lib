"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initPlayerCards = ({ players, playerCards, nextCard, }) => {
    playerCards = Array(players)
        .fill([])
        .map(() => [nextCard(), nextCard()]);
    return playerCards;
};
exports.default = initPlayerCards;
