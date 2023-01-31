interface handStatusSplitProps {
    canHit: boolean[];
    canDouble: boolean[];
    handIndex: number;
}
declare const handStatusSplit: ({ canHit, canDouble, handIndex, }: handStatusSplitProps) => {
    newCanHit: boolean[];
    newCanDouble: boolean[];
};
export default handStatusSplit;
