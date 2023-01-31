interface initBetsProps {
    totalMoney: number;
    bets: number[];
}
declare const initBets: ({ totalMoney, bets }: initBetsProps) => {
    handBets: number[];
    newTotalMoney: number;
};
export default initBets;
