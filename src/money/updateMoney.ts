interface updateMoneyProps {
  totalMoney: number;
  handBets: number[];
  handIndex: number;
  result: "Blackjack" | "Win" | "Lost" | "Push";
}

const updateMoney = ({
  totalMoney,
  handBets,
  handIndex,
  result,
}: updateMoneyProps) => {
  switch (result) {
    case "Blackjack":
      return totalMoney + handBets[handIndex] * 2.5;
    case "Win":
      return totalMoney + handBets[handIndex] * 2;
    case "Lost":
      return totalMoney;
    case "Push":
      return totalMoney + handBets[handIndex];
  }
};

export default updateMoney;
