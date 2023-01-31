import { describe, test, expect } from "@jest/globals";
import hasBlackjack from "../../src/results/hasBlackjack";
import Card from "../../src/models/Card";

describe("Test hasBlackjack", () => {
  const ace = new Card("A", 11, "Hearts");
  const jack = new Card("J", 10, "Diamonds");

  test("Returns false for not blackjack", () => {
    expect(hasBlackjack([ace, jack, jack])).toBeFalsy();
  });

  test("Returns true for blackjack", () => {
    expect(hasBlackjack([ace, jack])).toBeTruthy();
  });
});
