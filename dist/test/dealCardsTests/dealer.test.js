"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const getNextCard_1 = __importDefault(require("../../src/deck/getNextCard"));
const initDealerCards_1 = __importDefault(require("../../src/dealCards/dealerCards/initDealerCards"));
const dealerHitCard_1 = __importDefault(require("../../src/dealCards/dealerCards/dealerHitCard"));
(0, globals_1.describe)("Test dealerHitCard", () => {
    (0, globals_1.test)("Can hit empty array", () => {
        (0, globals_1.expect)((0, dealerHitCard_1.default)({ dealerCards: [], nextCard: (0, getNextCard_1.default)() }).length).toBe(1);
    });
    (0, globals_1.test)("Increments length of cards by one", () => {
        (0, globals_1.expect)((0, dealerHitCard_1.default)({
            dealerCards: [(0, getNextCard_1.default)()(), (0, getNextCard_1.default)()()],
            nextCard: (0, getNextCard_1.default)(),
        }).length).toBe(3);
    });
    (0, globals_1.describe)("Test initDealercards", () => {
        (0, globals_1.test)("Returns array of two elements", () => {
            (0, globals_1.expect)((0, initDealerCards_1.default)({ nextCard: (0, getNextCard_1.default)() }).length).toBe(2);
        });
        (0, globals_1.test)("Reaturns array of type Card", () => {
            (0, globals_1.expect)((0, initDealerCards_1.default)({ nextCard: (0, getNextCard_1.default)() })).toBeInstanceOf((Array));
        });
    });
});
