"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doubleBet = ({ totalMoney, handBets, handIndex }) => {
    const newHandBets = handBets.map((v, i) => (i === handIndex ? v * 2 : v));
    const newTotalMoney = totalMoney - handBets[handIndex];
    return { newHandBets, newTotalMoney };
};
exports.default = doubleBet;
