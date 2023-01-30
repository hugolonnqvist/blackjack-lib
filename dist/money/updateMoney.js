"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateMoney = ({ totalMoney, handBets, handIndex, result, }) => {
    switch (result) {
        case "Blackjack":
            return totalMoney + handBets[handIndex] * 2.5;
        case "Win":
            return totalMoney + handBets[handIndex] * 2;
        case "Lost":
            return totalMoney;
        case "Push":
            return totalMoney + handBets[handIndex];
    }
};
exports.default = updateMoney;
