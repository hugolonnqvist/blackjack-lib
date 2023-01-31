"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const handStatusSplit_1 = __importDefault(require("../../src/playerHands/handStatusSplit"));
(0, globals_1.describe)("Test handStatusSplit", () => {
    (0, globals_1.test)("Returns correct new element for the canHit", () => {
        const handIndex = Math.floor(Math.random() * 3);
        (0, globals_1.expect)((0, handStatusSplit_1.default)({
            canHit: [true, true, true],
            canDouble: [false, false, false],
            handIndex,
        }).newCanHit[handIndex + 1]).toBeTruthy();
    });
    (0, globals_1.test)("Returns correct new element for the canDouble", () => {
        const handIndex = Math.floor(Math.random() * 3);
        (0, globals_1.expect)((0, handStatusSplit_1.default)({
            canHit: [true, true, true],
            canDouble: [false, false, false],
            handIndex,
        }).newCanDouble[handIndex + 1]).toBeTruthy();
    });
    (0, globals_1.test)("Returns correct arrays", () => {
        (0, globals_1.expect)((0, handStatusSplit_1.default)({
            canHit: [true, true, false],
            canDouble: [false, false, false],
            handIndex: 1,
        })).toStrictEqual({
            newCanHit: [true, true, true, false],
            newCanDouble: [false, false, true, false],
        });
    });
});
