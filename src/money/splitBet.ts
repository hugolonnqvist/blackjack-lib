interface splitBetProps {
  totalMoney: number;
  handBets: number[];
  handIndex: number;
}

const splitBet = ({ totalMoney, handBets, handIndex }: splitBetProps) => {
  const newBets = [...handBets];

  for (let i = newBets.length; handIndex + 1 < i; i--) {
    newBets[i] = newBets[i - 1];
  }

  newBets[handIndex + 1] = newBets[handIndex];

  const newTotalMoney = totalMoney - newBets[handIndex];

  return { newBets, newTotalMoney };
};

export default splitBet;
