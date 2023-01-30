"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const doubleBet_1 = __importDefault(require("./doubleBet"));
(0, globals_1.describe)("Test doubleBet", () => {
    const totalMoney = 100;
    const handBets = [10, 25, 10];
    const handIndex = 1;
    (0, globals_1.test)("Returns correct totalmoney", () => {
        (0, globals_1.expect)((0, doubleBet_1.default)({ totalMoney, handBets, handIndex }).newTotalMoney).toStrictEqual(75);
    });
    (0, globals_1.test)("Updates handBets", () => {
        (0, globals_1.expect)((0, doubleBet_1.default)({ totalMoney, handBets, handIndex }).newHandBets).toStrictEqual([10, 50, 10]);
    });
});
