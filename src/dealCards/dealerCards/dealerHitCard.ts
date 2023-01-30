import Card from "../../models/Card";

interface dealerHitCardProps {
  dealerCards: Card[];
  nextCard: () => Card;
}

const dealerHitCard = ({ dealerCards, nextCard }: dealerHitCardProps) => {
  return [...dealerCards, nextCard()];
};

export default dealerHitCard;
