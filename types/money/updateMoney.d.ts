interface updateMoneyProps {
    totalMoney: number;
    handBets: number[];
    handIndex: number;
    result: "Blackjack" | "Win" | "Lost" | "Push";
}
declare const updateMoney: ({ totalMoney, handBets, handIndex, result, }: updateMoneyProps) => number;
export default updateMoney;
