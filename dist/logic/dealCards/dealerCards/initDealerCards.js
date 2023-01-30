"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initDealerCards = ({ dealerCards, nextCard }) => {
    dealerCards = [nextCard(), nextCard()];
    return dealerCards;
};
exports.default = initDealerCards;
