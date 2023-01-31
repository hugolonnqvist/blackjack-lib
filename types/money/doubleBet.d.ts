interface doubleBetProps {
    totalMoney: number;
    handBets: number[];
    handIndex: number;
}
declare const doubleBet: ({ totalMoney, handBets, handIndex }: doubleBetProps) => {
    newHandBets: number[];
    newTotalMoney: number;
};
export default doubleBet;
