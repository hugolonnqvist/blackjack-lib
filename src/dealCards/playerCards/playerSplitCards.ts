import Card from "../../models/Card";

interface playerSplitCardsProps {
  playerCards: Card[][];
  handIndex: number;
  nextCard: () => Card;
}

const playerSplitCards = ({
  playerCards,
  handIndex,
  nextCard,
}: playerSplitCardsProps) => {
  const newCards = [...playerCards];

  for (let i = playerCards.length; handIndex + 1 < i; i--) {
    newCards[i] = newCards[i - 1];
  }
  newCards[handIndex + 1] = [newCards[handIndex][1]];
  newCards[handIndex] = [newCards[handIndex][0]];
  newCards[handIndex][1] = nextCard();
  newCards[handIndex + 1][1] = nextCard();

  return newCards;
};

export default playerSplitCards;
