import { describe, test, expect } from "@jest/globals";
import calculateResults from "../../src/results/calculateResults";
import Card from "../../src/models/Card";

describe("Test calculateResults", () => {
  const blackjack = [
    new Card("Ace", 11, "Hearts"),
    new Card("King", 10, "Hearts"),
  ];
  const nineteen = [new Card("King", 10, "Hearts"), new Card("9", 9, "Hearts")];
  const seventeen = [new Card("Ace", 11, "Hearts"), new Card("6", 6, "Hearts")];
  const twelve = [new Card("7", 7, "Hearts"), new Card("5", 5, "Hearts")];

  test("Returns push if dealer and player have blackjack", () => {
    expect(
      calculateResults({ dealerCards: blackjack, playerCards: [blackjack] })
    ).toStrictEqual(["Push"]);
  });

  test("Returns lost if dealer has higher value", () => {
    expect(
      calculateResults({ dealerCards: seventeen, playerCards: [twelve] })
    ).toStrictEqual(["Lost"]);
  });

  test("Returns win if better score than dealer", () => {
    expect(
      calculateResults({ dealerCards: seventeen, playerCards: [nineteen] })
    ).toStrictEqual(["Win"]);
  });
});
