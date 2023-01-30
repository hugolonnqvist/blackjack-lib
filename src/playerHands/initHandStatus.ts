const initHandStatus = (players: number) => {
  const canHit = Array(players).fill(true);
  const canDouble = Array(players).fill(true);
  return { canHit, canDouble };
};

export default initHandStatus;
