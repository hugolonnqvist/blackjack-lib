interface handStatusSplitProps {
  canHit: boolean[];
  canDouble: boolean[];
  handIndex: number;
}

const handStatusSplit = ({
  canHit,
  canDouble,
  handIndex,
}: handStatusSplitProps) => {
  const newCanHit = [...canHit];
  const newCanDouble = [...canDouble];

  for (let i = newCanHit.length; handIndex + 1 < i; i--) {
    newCanHit[i] = newCanHit[i - 1];
    newCanDouble[i] = newCanDouble[i - 1];
  }

  newCanHit[handIndex + 1] = true;
  newCanDouble[handIndex + 1] = true;

  return { newCanHit, newCanDouble };
};

export default handStatusSplit;
