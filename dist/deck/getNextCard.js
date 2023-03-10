"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateDeck_1 = __importDefault(require("./generateDeck"));
const getNextCard = () => () => {
    const deck = (0, generateDeck_1.default)(4);
    let index = 0;
    return () => deck[index++];
};
exports.default = getNextCard;
