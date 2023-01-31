"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const initBets_1 = __importDefault(require("../src/money/initBets"));
const doubleBet_1 = __importDefault(require("../src/money/doubleBet"));
const splitBet_1 = __importDefault(require("../src/money/splitBet"));
const updateMoney_1 = __importDefault(require("../src/money/updateMoney"));
(0, globals_1.describe)("Test initBets", () => {
    (0, globals_1.test)("Returns correct new money", () => {
        (0, globals_1.expect)((0, initBets_1.default)({ totalMoney: 100, bets: [10, 20, 10] }).newTotalMoney).toBe(60);
    });
    (0, globals_1.test)("Returns same bets as input", () => {
        (0, globals_1.expect)((0, initBets_1.default)({ totalMoney: 100, bets: [15, 20, 5] }).handBets).toStrictEqual([15, 20, 5]);
    });
});
(0, globals_1.describe)("Test doubleBet", () => {
    (0, globals_1.test)("Returns correct totalmoney", () => {
        (0, globals_1.expect)((0, doubleBet_1.default)({ totalMoney: 100, handBets: [10, 25, 10], handIndex: 1 })
            .newTotalMoney).toStrictEqual(75);
    });
    (0, globals_1.test)("Updates handBets", () => {
        (0, globals_1.expect)((0, doubleBet_1.default)({ totalMoney: 100, handBets: [10, 25, 10], handIndex: 1 })
            .newHandBets).toStrictEqual([10, 50, 10]);
    });
});
(0, globals_1.describe)("Test splitBet", () => {
    const handIndex = Math.floor(Math.random() * 2);
    (0, globals_1.test)("Increments adds one element to bets", () => {
        (0, globals_1.expect)((0, splitBet_1.default)({ totalMoney: 100, handBets: [10, 20], handIndex }).newBets
            .length).toBe(3);
    });
    (0, globals_1.test)("Returns correct new total money", () => {
        const totalMoney = 100;
        const handBets = [10, 20, 30];
        (0, globals_1.expect)((0, splitBet_1.default)({ totalMoney, handBets, handIndex }).newTotalMoney).toBe(totalMoney - handBets[handIndex]);
    });
    (0, globals_1.test)("Returns correct new bets", () => {
        const handBets = [50, 20, 30];
        (0, globals_1.expect)((0, splitBet_1.default)({ totalMoney: 100, handBets, handIndex: 1 }).newBets).toStrictEqual([50, 20, 20, 30]);
    });
});
(0, globals_1.describe)("Test updateMoney", () => {
    const handBets = [10, 20, 10];
    (0, globals_1.test)("Returns correct new total money with blackjack result", () => {
        (0, globals_1.expect)((0, updateMoney_1.default)({
            totalMoney: 100,
            handBets,
            handIndex: 1,
            result: "Blackjack",
        })).toBe(150);
    });
    (0, globals_1.test)("Returns correct new total money with win result", () => {
        (0, globals_1.expect)((0, updateMoney_1.default)({
            totalMoney: 100,
            handBets,
            handIndex: 1,
            result: "Win",
        })).toBe(140);
    });
    (0, globals_1.test)("Returns correct new total money with lost result", () => {
        (0, globals_1.expect)((0, updateMoney_1.default)({
            totalMoney: 100,
            handBets,
            handIndex: 1,
            result: "Lost",
        })).toBe(100);
    });
    (0, globals_1.test)("Returns correct new total money with push result", () => {
        (0, globals_1.expect)((0, updateMoney_1.default)({
            totalMoney: 100,
            handBets,
            handIndex: 1,
            result: "Push",
        })).toBe(120);
    });
});
