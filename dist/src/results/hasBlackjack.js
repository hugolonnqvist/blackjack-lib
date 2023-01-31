"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasBlackjack = (hand) => {
    return (hand.length === 2 &&
        (hand[0].value === 11 || hand[1].value === 11) &&
        (hand[0].value === 10 || hand[1].value === 10));
};
exports.default = hasBlackjack;
