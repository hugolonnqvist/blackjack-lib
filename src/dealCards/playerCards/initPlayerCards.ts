import Card from "../../models/Card";

interface initPlayerCardsProps {
  players: number;
  nextCard: () => Card;
}

const initPlayerCards = ({ players, nextCard }: initPlayerCardsProps) => {
  return Array(players)
    .fill([])
    .map(() => [nextCard(), nextCard()]);
};

export default initPlayerCards;
