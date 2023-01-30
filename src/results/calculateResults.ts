import Card from "../models/Card";
import getHandValue from "./getHandValue";
import checkForBlackJack from "./hasBlackjack";

interface calculateResultsProps {
  dealerCards: Card[];
  playerCards: Card[][];
}

const calculateResults = ({
  dealerCards,
  playerCards,
}: calculateResultsProps) => {
  const dealerValue = getHandValue(dealerCards);
  const playerValues = playerCards.map((hand) => getHandValue(hand));

  const results = playerValues.map((handValue, i) => {
    if (checkForBlackJack(playerCards[i]) && !checkForBlackJack(dealerCards)) {
      return "Blackjack";
    } else if (
      !checkForBlackJack(playerCards[i]) &&
      checkForBlackJack(dealerCards)
    ) {
      return "Lost";
    } else if (handValue > 21) {
      return "Lost";
    } else if (dealerValue > 21) {
      return "Win";
    } else {
      return dealerValue > handValue
        ? "Lost"
        : dealerValue < handValue
        ? "Win"
        : "Push";
    }
  });

  return results;
};

export default calculateResults;
