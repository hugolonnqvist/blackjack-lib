"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getHandValue_1 = __importDefault(require("./getHandValue"));
const hasBlackjack_1 = __importDefault(require("./hasBlackjack"));
const calculateResults = ({ dealerCards, playerCards, }) => {
    const dealerValue = (0, getHandValue_1.default)(dealerCards);
    const playerValues = playerCards.map((hand) => (0, getHandValue_1.default)(hand));
    const results = playerValues.map((handValue, i) => {
        if ((0, hasBlackjack_1.default)(playerCards[i]) && !(0, hasBlackjack_1.default)(dealerCards)) {
            return "Blackjack";
        }
        else if (!(0, hasBlackjack_1.default)(playerCards[i]) &&
            (0, hasBlackjack_1.default)(dealerCards)) {
            return "Lost";
        }
        else if (handValue > 21) {
            return "Lost";
        }
        else if (dealerValue > 21) {
            return "Win";
        }
        else {
            return dealerValue > handValue
                ? "Lost"
                : dealerValue < handValue
                    ? "Win"
                    : "Push";
        }
    });
    return results;
};
exports.default = calculateResults;
