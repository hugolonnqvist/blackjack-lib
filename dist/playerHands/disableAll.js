"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disableAll = ({ canHit, canDouble }) => {
    const newCanHit = canHit.map(() => false);
    const newCanDouble = canDouble.map(() => false);
    return { newCanHit, newCanDouble };
};
exports.default = disableAll;
