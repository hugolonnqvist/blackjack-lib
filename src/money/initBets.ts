interface initBetsProps {
  totalMoney: number;
  bets: number[];
}

const initBets = ({ totalMoney, bets }: initBetsProps) => {
  const handBets = [...bets];
  const newTotalMoney = totalMoney - bets.reduce((tot, v) => tot + v);
  return { handBets, newTotalMoney };
};

export default initBets;
