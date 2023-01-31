import Card from "../../models/Card";
interface playerHitCardProps {
    playerCards: Card[][];
    handIndex: number;
    nextCard: () => Card;
}
declare const playerHitCard: ({ playerCards, handIndex, nextCard, }: playerHitCardProps) => Card[][];
export default playerHitCard;
