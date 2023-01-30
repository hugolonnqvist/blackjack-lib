"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
const dealCards = ({ players, playerCards, dealerCards }) => {
    playerCards = Array(players)
        .fill([])
        .map(() => [(0, deck_1.nextCard)(), (0, deck_1.nextCard)()]);
    dealerCards = [(0, deck_1.nextCard)(), (0, deck_1.nextCard)()];
    return { playerCards, dealerCards };
};
exports.default = dealCards;
