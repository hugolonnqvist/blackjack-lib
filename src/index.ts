import Card from "./models/Card";
import initDealerCards from "./dealCards/dealerCards/initDealerCards";
import initPlayerCards from "./dealCards/playerCards/initPlayerCards";
import getNextCard from "./dealCards/getNextCard";

const nextCard = getNextCard();
let playerCards: Card[][] = [];
let dealerCards: Card[] = [];

// playerCards = initPlayerCards({ players: 2, playerCards, nextCard });
// dealerCards = initDealerCards({ dealerCards, nextCard });

// const printCards = () => {
//   console.log("PlayerCards: ");
//   for (const hand of playerCards) {
//     for (const card of hand) {
//       console.log(card.label + " ");
//     }
//   }
//   console.log("DealerCards: ");
//   for (const card of dealerCards) {
//     console.log(card.label);
//   }
// };

// printCards();
