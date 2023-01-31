import Card from "../../models/Card";

interface playerHitCardProps {
  playerCards: Card[][];
  handIndex: number;
  nextCard: () => Card;
}

const playerHitCard = ({
  playerCards,
  handIndex,
  nextCard,
}: playerHitCardProps): Card[][] => {
  return playerCards.map((v, i) => (i === handIndex ? [...v, nextCard()] : v));
};

export default playerHitCard;
