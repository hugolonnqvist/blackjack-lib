import dealerHitCard from "../dealCards/dealerCards/dealerHitCard";
import Card from "../models/Card";
import calculateResults from "./calculateResults";
import getHandValue from "./getHandValue";

interface endRoundProps {
  dealerCards: Card[];
  playerCards: Card[][];
  nextCard: () => Card;
}

const endRound = ({ dealerCards, playerCards, nextCard }: endRoundProps) => {
  let dealerCardsCopy = [...dealerCards];
  while (getHandValue(dealerCardsCopy) < 17) {
    dealerCardsCopy = dealerHitCard({ dealerCards, nextCard });
  }
  return calculateResults({ dealerCards, playerCards });
};
