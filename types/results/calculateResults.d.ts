import Card from "../models/Card";
interface calculateResultsProps {
    dealerCards: Card[];
    playerCards: Card[][];
}
declare const calculateResults: ({ dealerCards, playerCards, }: calculateResultsProps) => ("Blackjack" | "Win" | "Lost" | "Push")[];
export default calculateResults;
