import Card from "../../models/Card";
interface initDealerCardsProps {
    nextCard: () => Card;
}
declare const initDealerCards: ({ nextCard }: initDealerCardsProps) => Card[];
export default initDealerCards;
