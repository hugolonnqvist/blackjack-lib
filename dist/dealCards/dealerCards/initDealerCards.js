"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initDealerCards = ({ nextCard }) => {
    return [nextCard(), nextCard()];
};
exports.default = initDealerCards;
