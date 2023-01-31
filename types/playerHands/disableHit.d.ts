interface disableHitProps {
    handIndex: number;
    canHit: boolean[];
    canDouble: boolean[];
}
declare const disableHit: ({ handIndex, canHit, canDouble }: disableHitProps) => {
    newCanHit: boolean[];
    newCanDouble: boolean[];
};
export default disableHit;
