import { describe, test, expect } from "@jest/globals";
import Card from "../../src/models/Card";
import endRound from "../../src/results/endRound";
import getNextCard from "../../src/deck/getNextCard";

describe("Test endRound", () => {
  const blackjack = [
    new Card("Ace", 11, "Hearts"),
    new Card("King", 10, "Hearts"),
  ];
  const seventeen = [new Card("Ace", 11, "Hearts"), new Card("6", 6, "Hearts")];
  const twelve = [new Card("7", 7, "Hearts"), new Card("5", 5, "Hearts")];
  const nextCard = getNextCard();
  const bust = [
    new Card("10", 10, "Hearts"),
    new Card("10", 10, "Hearts"),
    new Card("5", 5, "Diamonds"),
  ];
  test("Returns only lost for dealer blackjack win", () => {
    expect(
      endRound({
        dealerCards: blackjack,
        playerCards: [seventeen, twelve],
        nextCard,
      })
    ).toStrictEqual(["Lost", "Lost"]);
  });

  test("Works if dealer has under 17", () => {
    expect(
      endRound({
        dealerCards: twelve,
        playerCards: [bust, twelve],
        nextCard,
      })
    ).toContain("Lost");
  });

  test("Win if only dealer busts", () => {
    expect(
      endRound({
        dealerCards: bust,
        playerCards: [
          [nextCard(), nextCard()],
          [nextCard(), nextCard()],
        ],
        nextCard,
      })
    ).toContain("Win" || "Blackjack");
  });
});
