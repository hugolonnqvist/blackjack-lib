interface splitBetProps {
    totalMoney: number;
    handBets: number[];
    handIndex: number;
}
declare const splitBet: ({ totalMoney, handBets, handIndex }: splitBetProps) => {
    newBets: number[];
    newTotalMoney: number;
};
export default splitBet;
