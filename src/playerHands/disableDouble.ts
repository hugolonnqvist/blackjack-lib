interface disableDoubleProps {
  canDouble: boolean[];
  handIndex: number;
}
const disableDouble = ({ canDouble, handIndex }: disableDoubleProps) => {
  const newCanDouble = canDouble.map((v, i) => i !== handIndex && v);
  return newCanDouble;
};

export default disableDouble;
