"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disableHit = ({ handIndex, canHit, canDouble }) => {
    const newCanHit = canHit.map((v, i) => i !== handIndex && v);
    const newCanDouble = canDouble.map((v, i) => i !== handIndex && v);
    return { newCanHit, newCanDouble };
};
exports.default = disableHit;
