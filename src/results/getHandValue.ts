import Card from "../models/Card";

const getHandValue = (hand: Card[]) => {
  let handValue = 0;
  let numberOfAces = 0;

  for (const card of hand) {
    if (card.label === "A") {
      numberOfAces++;
    }
    handValue += card.value;
  }

  while (handValue > 21) {
    if (numberOfAces > 0) {
      numberOfAces--;
      handValue -= 10;
    } else {
      break;
    }
  }

  return handValue;
};

export default getHandValue;
