"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disableDouble = ({ canDouble, handIndex }) => {
    const newCanDouble = canDouble.map((v, i) => i !== handIndex && v);
    return newCanDouble;
};
exports.default = disableDouble;
