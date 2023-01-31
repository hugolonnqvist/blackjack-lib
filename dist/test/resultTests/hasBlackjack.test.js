"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const hasBlackjack_1 = __importDefault(require("../../src/results/hasBlackjack"));
const Card_1 = __importDefault(require("../../src/models/Card"));
(0, globals_1.describe)("Test hasBlackjack", () => {
    const ace = new Card_1.default("A", 11, "Hearts");
    const jack = new Card_1.default("J", 10, "Diamonds");
    (0, globals_1.test)("Returns false for not blackjack", () => {
        (0, globals_1.expect)((0, hasBlackjack_1.default)([ace, jack, jack])).toBeFalsy();
    });
    (0, globals_1.test)("Returns true for blackjack", () => {
        (0, globals_1.expect)((0, hasBlackjack_1.default)([ace, jack])).toBeTruthy();
    });
});
