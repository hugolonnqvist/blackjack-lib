import generateDeck from "./generateDeck";

const getNextCard = () => {
  const deck = generateDeck();
  let index = 0;

  return () => deck[index++];
};

export default getNextCard;
