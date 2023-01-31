"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const getNextCard_1 = __importDefault(require("../../src/deck/getNextCard"));
const playerHitCard_1 = __importDefault(require("../../src/dealCards/playerCards/playerHitCard"));
const initPlayerCards_1 = __importDefault(require("../../src/dealCards/playerCards/initPlayerCards"));
(0, globals_1.describe)("Test playerHitCards", () => {
    (0, globals_1.test)("Increments chosen hand by one card", () => {
        (0, globals_1.expect)((0, playerHitCard_1.default)({
            playerCards: [[(0, getNextCard_1.default)()()]],
            handIndex: 0,
            nextCard: (0, getNextCard_1.default)(),
        })[0].length).toBe(2);
    });
    (0, globals_1.test)("Can hit any hand", () => {
        const handIndex = Math.floor(Math.random() * 3);
        (0, globals_1.expect)((0, playerHitCard_1.default)({
            playerCards: [[(0, getNextCard_1.default)()()], [(0, getNextCard_1.default)()()], [(0, getNextCard_1.default)()()]],
            handIndex,
            nextCard: (0, getNextCard_1.default)(),
        })[handIndex].length).toBe(2);
    });
});
(0, globals_1.describe)("Test initPlayerCards", () => {
    const players = Math.floor(Math.random() * 5);
    (0, globals_1.test)("Returns correct number of hands", () => {
        (0, globals_1.expect)((0, initPlayerCards_1.default)({ players, nextCard: (0, getNextCard_1.default)() }).length).toBe(players);
    });
    (0, globals_1.test)("Returns hands of array of type Card", () => {
        (0, globals_1.expect)((0, initPlayerCards_1.default)({ players, nextCard: (0, getNextCard_1.default)() })).toBeInstanceOf((Array));
    });
});
