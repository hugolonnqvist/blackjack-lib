"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initHandStatus = (players) => {
    const canHit = Array(players).fill(true);
    const canDouble = Array(players).fill(true);
    return { canHit, canDouble };
};
exports.default = initHandStatus;
