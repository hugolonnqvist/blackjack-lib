import Card from "../models/Card";
interface endRoundProps {
    dealerCards: Card[];
    playerCards: Card[][];
    nextCard: () => Card;
}
declare const endRound: ({ dealerCards, playerCards, nextCard }: endRoundProps) => ("Blackjack" | "Win" | "Lost" | "Push")[];
export default endRound;
