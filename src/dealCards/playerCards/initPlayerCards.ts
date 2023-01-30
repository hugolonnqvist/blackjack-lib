import Card from "../../models/Card";

interface initPlayerCardsProps {
  players: number;
  playerCards: Card[][];
  nextCard: () => Card;
}

const initPlayerCards = ({
  players,
  playerCards,
  nextCard,
}: initPlayerCardsProps) => {
  playerCards = Array(players)
    .fill([])
    .map(() => [nextCard(), nextCard()]);

  return playerCards;
};

export default initPlayerCards;
