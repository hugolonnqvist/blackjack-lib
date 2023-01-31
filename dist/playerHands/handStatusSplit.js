"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handStatusSplit = ({ canHit, canDouble, handIndex, }) => {
    const newCanHit = [...canHit];
    const newCanDouble = [...canDouble];
    for (let i = newCanHit.length; handIndex + 1 < i; i--) {
        newCanHit[i] = newCanHit[i - 1];
        newCanDouble[i] = newCanDouble[i - 1];
    }
    newCanHit[handIndex + 1] = true;
    newCanDouble[handIndex + 1] = true;
    return { newCanHit, newCanDouble };
};
exports.default = handStatusSplit;
