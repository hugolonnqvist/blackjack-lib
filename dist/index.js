"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const initDealerCards_1 = __importDefault(
  require("./dealCards/dealerCards/initDealerCards")
);
const initPlayerCards_1 = __importDefault(
  require("./dealCards/playerCards/initPlayerCards")
);
const getNextCard_1 = require("./getNextCard");
const nextCard = (0, getNextCard_1.getNextCard)();
let playerCards = [];
let dealerCards = [];
playerCards = (0, initPlayerCards_1.default)({
  players: 2,
  playerCards,
  nextCard,
});
dealerCards = (0, initDealerCards_1.default)({ dealerCards, nextCard });
const printCards = () => {
  console.log("PlayerCards: ");
  for (const hand of playerCards) {
    for (const card of hand) {
      console.log(card.label + " ");
    }
  }
  console.log("DealerCards: ");
  for (const card of dealerCards) {
    console.log(card.label);
  }
};
printCards();
