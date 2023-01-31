import Card from "../../models/Card";
interface initPlayerCardsProps {
    players: number;
    nextCard: () => Card;
}
declare const initPlayerCards: ({ players, nextCard }: initPlayerCardsProps) => Card[][];
export default initPlayerCards;
