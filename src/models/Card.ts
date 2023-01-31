export default class Card {
  label: string;
  value: number;
  suit: string;
  suitSymbol: string;

  constructor(label: string, value: number, suit: string, suitSymbol: string) {
    this.label = label;
    this.value = value;
    this.suit = suit;
    this.suitSymbol = suitSymbol;
  }
}
