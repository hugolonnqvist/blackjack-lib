"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const initHandStatus_1 = __importDefault(require("../../src/playerHands/initHandStatus"));
(0, globals_1.describe)("Test initHandStatus", () => {
    const players = Math.floor(Math.random() * 3);
    (0, globals_1.test)("Returns correct canHit array", () => {
        (0, globals_1.expect)((0, initHandStatus_1.default)(players).canHit).toStrictEqual(Array(players).fill(true));
    });
    (0, globals_1.test)("Returns correct canDouble array", () => {
        (0, globals_1.expect)((0, initHandStatus_1.default)(players).canDouble).toStrictEqual(Array(players).fill(true));
    });
});
