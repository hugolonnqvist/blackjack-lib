"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initPlayerCards = ({ players, nextCard }) => {
    return Array(players)
        .fill([])
        .map(() => [nextCard(), nextCard()]);
};
exports.default = initPlayerCards;
