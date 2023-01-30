interface disableHitProps {
  handIndex: number;
  canHit: boolean[];
  canDouble: boolean[];
}

const disableHit = ({ handIndex, canHit, canDouble }: disableHitProps) => {
  const newCanHit = canHit.map((v, i) => i !== handIndex && v);
  const newCanDouble = canDouble.map((v, i) => i !== handIndex && v);

  return { newCanHit, newCanDouble };
};

export default disableHit;
