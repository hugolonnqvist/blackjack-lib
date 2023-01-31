"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const calculateResults_1 = __importDefault(require("../../src/results/calculateResults"));
const Card_1 = __importDefault(require("../../src/models/Card"));
(0, globals_1.describe)("Test calculateResults", () => {
    const blackjack = [
        new Card_1.default("Ace", 11, "Hearts"),
        new Card_1.default("King", 10, "Hearts"),
    ];
    const nineteen = [new Card_1.default("King", 10, "Hearts"), new Card_1.default("9", 9, "Hearts")];
    const seventeen = [new Card_1.default("Ace", 11, "Hearts"), new Card_1.default("6", 6, "Hearts")];
    const twelve = [new Card_1.default("7", 7, "Hearts"), new Card_1.default("5", 5, "Hearts")];
    (0, globals_1.test)("Returns push if dealer and player have blackjack", () => {
        (0, globals_1.expect)((0, calculateResults_1.default)({ dealerCards: blackjack, playerCards: [blackjack] })).toStrictEqual(["Push"]);
    });
    (0, globals_1.test)("Returns lost if dealer has higher value", () => {
        (0, globals_1.expect)((0, calculateResults_1.default)({ dealerCards: seventeen, playerCards: [twelve] })).toStrictEqual(["Lost"]);
    });
    (0, globals_1.test)("Returns win if better score than dealer", () => {
        (0, globals_1.expect)((0, calculateResults_1.default)({ dealerCards: seventeen, playerCards: [nineteen] })).toStrictEqual(["Win"]);
    });
});
