"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const generateDeck_1 = __importDefault(require("../../src/deck/generateDeck"));
(0, globals_1.describe)("Test generateDeck", () => {
    (0, globals_1.test)("Can generate 1 deck", () => {
        (0, globals_1.expect)((0, generateDeck_1.default)(1).length).toBe(52);
    });
    (0, globals_1.test)("Can generate multiple decks", () => {
        (0, globals_1.expect)((0, generateDeck_1.default)(5).length).toBe(52 * 5);
    });
});
