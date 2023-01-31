"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Card_1 = __importDefault(require("../../src/models/Card"));
const endRound_1 = __importDefault(require("../../src/results/endRound"));
const getNextCard_1 = __importDefault(require("../../src/deck/getNextCard"));
(0, globals_1.describe)("Test endRound", () => {
    const blackjack = [
        new Card_1.default("Ace", 11, "Hearts"),
        new Card_1.default("King", 10, "Hearts"),
    ];
    const seventeen = [new Card_1.default("Ace", 11, "Hearts"), new Card_1.default("6", 6, "Hearts")];
    const twelve = [new Card_1.default("7", 7, "Hearts"), new Card_1.default("5", 5, "Hearts")];
    const nextCard = (0, getNextCard_1.default)();
    const bust = [
        new Card_1.default("10", 10, "Hearts"),
        new Card_1.default("10", 10, "Hearts"),
        new Card_1.default("5", 5, "Diamonds"),
    ];
    (0, globals_1.test)("Returns only lost for dealer blackjack win", () => {
        (0, globals_1.expect)((0, endRound_1.default)({
            dealerCards: blackjack,
            playerCards: [seventeen, twelve],
            nextCard,
        })).toStrictEqual(["Lost", "Lost"]);
    });
    (0, globals_1.test)("Works if dealer has under 17", () => {
        (0, globals_1.expect)((0, endRound_1.default)({
            dealerCards: twelve,
            playerCards: [bust, twelve],
            nextCard,
        })).toContain("Lost");
    });
    (0, globals_1.test)("Win if only dealer busts", () => {
        (0, globals_1.expect)((0, endRound_1.default)({
            dealerCards: bust,
            playerCards: [
                [nextCard(), nextCard()],
                [nextCard(), nextCard()],
            ],
            nextCard,
        })).toContain("Win" || "Blackjack");
    });
});
