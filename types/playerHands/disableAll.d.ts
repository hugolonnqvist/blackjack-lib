interface disableAllProps {
    canHit: boolean[];
    canDouble: boolean[];
}
declare const disableAll: ({ canHit, canDouble }: disableAllProps) => {
    newCanHit: boolean[];
    newCanDouble: boolean[];
};
export default disableAll;
