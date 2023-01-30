"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const splitBet = ({ handIndex, handBets, totalMoney }) => {
    const newBets = [...handBets];
    for (let i = newBets.length; handIndex + 1 < i; i--) {
        newBets[i] = newBets[i - 1];
    }
    newBets[handIndex + 1] = newBets[handIndex];
    const newTotalMoney = totalMoney - newBets[handIndex];
    return { newBets, newTotalMoney };
};
exports.default = splitBet;
