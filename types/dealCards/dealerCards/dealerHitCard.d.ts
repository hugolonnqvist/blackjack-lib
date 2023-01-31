import Card from "../../models/Card";
interface dealerHitCardProps {
    dealerCards: Card[];
    nextCard: () => Card;
}
declare const dealerHitCard: ({ dealerCards, nextCard }: dealerHitCardProps) => Card[];
export default dealerHitCard;
