import Card from "../models/Card";

const hasBlackjack = (hand: Card[]) => {
  if (
    hand.length === 2 &&
    (hand[0].value === 11 || hand[1].value === 11) &&
    (hand[0].value === 10 || hand[1].value === 10)
  ) {
    return true;
  } else {
    return false;
  }
};

export default hasBlackjack;
