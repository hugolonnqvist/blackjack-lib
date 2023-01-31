"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const getHandValue_1 = __importDefault(require("../../src/results/getHandValue"));
const Card_1 = __importDefault(require("../../src/models/Card"));
const getNextCard_1 = __importDefault(require("../../src/deck/getNextCard"));
(0, globals_1.describe)("Test getHandValue", () => {
    const ace = new Card_1.default("A", 11, "Hearts");
    const five = new Card_1.default("5", 5, "Hearts");
    const randomCard = (0, getNextCard_1.default)()();
    (0, globals_1.test)("Works one a single card", () => {
        (0, globals_1.expect)((0, getHandValue_1.default)([randomCard])).toBe(randomCard.value);
    });
    (0, globals_1.test)("Ace has value 11 if possible", () => {
        (0, globals_1.expect)((0, getHandValue_1.default)([ace, five])).toBe(16);
    });
    (0, globals_1.test)("Ace has value 1 if otherwise over 21", () => {
        (0, globals_1.expect)((0, getHandValue_1.default)([ace, five, five, five])).toBe(16);
    });
    (0, globals_1.test)("Works on two aces", () => {
        (0, globals_1.expect)((0, getHandValue_1.default)([ace, ace, five])).toBe(17);
    });
});
