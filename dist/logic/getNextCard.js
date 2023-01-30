"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNextCard = ({ deck, index }) => {
    return deck[index++];
};
exports.default = getNextCard;
