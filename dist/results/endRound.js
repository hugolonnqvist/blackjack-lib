"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dealerHitCard_1 = __importDefault(require("../dealCards/dealerCards/dealerHitCard"));
const calculateResults_1 = __importDefault(require("./calculateResults"));
const getHandValue_1 = __importDefault(require("./getHandValue"));
const endRound = ({ dealerCards, playerCards, nextCard }) => {
    let dealerCardsCopy = [...dealerCards];
    while ((0, getHandValue_1.default)(dealerCardsCopy) < 17) {
        dealerCardsCopy = (0, dealerHitCard_1.default)({ dealerCards, nextCard });
    }
    return (0, calculateResults_1.default)({ dealerCards, playerCards });
};
exports.default = endRound;
