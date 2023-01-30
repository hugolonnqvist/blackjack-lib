interface doubleBetProps {
  totalMoney: number;
  handBets: number[];
  handIndex: number;
}

const doubleBet = ({ totalMoney, handBets, handIndex }: doubleBetProps) => {
  const newHandBets = handBets.map((v, i) => (i === handIndex ? v * 2 : v));
  const newTotalMoney = totalMoney - handBets[handIndex];

  return { newHandBets, newTotalMoney };
};

export default doubleBet;
