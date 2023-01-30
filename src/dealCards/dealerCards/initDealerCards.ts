import Card from "../../models/Card";

interface initDealerCardsProps {
  nextCard: () => Card;
}

const initDealerCards = ({ nextCard }: initDealerCardsProps) => {
  return [nextCard(), nextCard()];
};

export default initDealerCards;
