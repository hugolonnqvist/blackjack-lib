"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const disableHit_1 = __importDefault(require("../../src/playerHands/disableHit"));
const disableDouble_1 = __importDefault(require("../../src/playerHands/disableDouble"));
const disableAll_1 = __importDefault(require("../../src/playerHands/disableAll"));
(0, globals_1.describe)("Test disableHit", () => {
    const canHit = [true, true, true];
    const canDouble = [true, false, true];
    (0, globals_1.test)("Returns correct new canHit array with correct elements", () => {
        (0, globals_1.expect)((0, disableHit_1.default)({ handIndex: 0, canHit, canDouble }).newCanHit).toStrictEqual([false, true, true]);
    });
    (0, globals_1.test)("Returns correct new canDouble array with correct elements", () => {
        (0, globals_1.expect)((0, disableHit_1.default)({ handIndex: 0, canHit, canDouble }).newCanDouble).toStrictEqual([false, false, true]);
    });
});
(0, globals_1.describe)("Test disableDouble", () => {
    (0, globals_1.test)("Disables correct element", () => {
        (0, globals_1.expect)((0, disableDouble_1.default)({ canDouble: [true, false, true], handIndex: 2 })).toStrictEqual([true, false, false]);
    });
    (0, globals_1.test)("Works on already disabled element", () => {
        (0, globals_1.expect)((0, disableDouble_1.default)({ canDouble: [true, false, true], handIndex: 1 })).toStrictEqual([true, false, true]);
    });
});
(0, globals_1.describe)("Test disable all", () => {
    (0, globals_1.test)("Disables both arrays", () => {
        const disabledArrays = {
            newCanHit: [false, false, false],
            newCanDouble: [false, false, false],
        };
        (0, globals_1.expect)((0, disableAll_1.default)({
            canHit: [true, false, true],
            canDouble: [false, false, true],
        })).toStrictEqual(disabledArrays);
    });
    (0, globals_1.test)("Works on alredy disabled arrays", () => {
        const disabledArray = Array(Math.floor(Math.random() * 5)).fill(false);
        (0, globals_1.expect)((0, disableAll_1.default)({ canHit: disabledArray, canDouble: disabledArray })).toStrictEqual({ newCanHit: disabledArray, newCanDouble: disabledArray });
    });
});
