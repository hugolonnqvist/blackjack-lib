export default class Card {
  label: string;
  value: number;
  suit: string;

  constructor(label: string, value: number, suit: string) {
    this.label = label;
    this.value = value;
    this.suit = suit;
  }
}
