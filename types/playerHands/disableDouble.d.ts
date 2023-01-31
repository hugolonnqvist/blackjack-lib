interface disableDoubleProps {
    canDouble: boolean[];
    handIndex: number;
}
declare const disableDouble: ({ canDouble, handIndex }: disableDoubleProps) => boolean[];
export default disableDouble;
