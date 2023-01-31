"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Card_1 = __importDefault(require("../../src/models/Card"));
const getNextCard_1 = __importDefault(require("../../src/deck/getNextCard"));
(0, globals_1.describe)("Test getNextCard", () => {
    const nextCard = (0, getNextCard_1.default)();
    (0, globals_1.test)("Returns a valid card element", () => {
        (0, globals_1.expect)(nextCard()).toBeInstanceOf(Card_1.default);
    });
});
