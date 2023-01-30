import Card from "../../models/Card";

interface initDealerCardsProps {
  dealerCards: Card[];
  nextCard: () => Card;
}

const initDealerCards = ({ dealerCards, nextCard }: initDealerCardsProps) => {
  dealerCards = [nextCard(), nextCard()];

  return dealerCards;
};

export default initDealerCards;
