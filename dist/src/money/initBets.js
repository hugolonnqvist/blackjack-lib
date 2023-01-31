"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initBets = ({ totalMoney, bets }) => {
    const handBets = [...bets];
    const newTotalMoney = totalMoney - bets.reduce((tot, v) => tot + v);
    return { handBets, newTotalMoney };
};
exports.default = initBets;
