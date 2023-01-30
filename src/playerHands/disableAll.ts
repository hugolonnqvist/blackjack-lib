interface disableAllProps {
  canHit: boolean[];
  canDouble: boolean[];
}

const disableAll = ({ canHit, canDouble }: disableAllProps) => {
  const newCanHit = canHit.map(() => false);
  const newCanDouble = canDouble.map(() => false);
  return { newCanHit, newCanDouble };
};

export default disableAll;
