import Card from "../../models/Card";
interface playerSplitCardsProps {
    playerCards: Card[][];
    handIndex: number;
    nextCard: () => Card;
}
declare const playerSplitCards: ({ playerCards, handIndex, nextCard, }: playerSplitCardsProps) => Card[][];
export default playerSplitCards;
