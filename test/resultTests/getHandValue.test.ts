import { describe, test, expect } from "@jest/globals";
import getHandValue from "../../src/results/getHandValue";
import Card from "../../src/models/Card";
import getNextCard from "../../src/deck/getNextCard";

describe("Test getHandValue", () => {
  const ace = new Card("A", 11, "Hearts");
  const five = new Card("5", 5, "Hearts");
  const randomCard = getNextCard()()();

  test("Works one a single card", () => {
    expect(getHandValue([randomCard])).toBe(randomCard.value);
  });

  test("Ace has value 11 if possible", () => {
    expect(getHandValue([ace, five])).toBe(16);
  });

  test("Ace has value 1 if otherwise over 21", () => {
    expect(getHandValue([ace, five, five, five])).toBe(16);
  });

  test("Works on two aces", () => {
    expect(getHandValue([ace, ace, five])).toBe(17);
  });
});
