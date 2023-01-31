import { describe, test, expect } from "@jest/globals";
import Card from "../../src/models/Card";
import getNextCard from "../../src/deck/getNextCard";
import initDealerCards from "../../src/dealCards/dealerCards/initDealerCards";
import dealerHitCard from "../../src/dealCards/dealerCards/dealerHitCard";

describe("Test dealerHitCard", () => {
  const nextCard = getNextCard();
  test("Can hit empty array", () => {
    expect(
      dealerHitCard({ dealerCards: [], nextCard: nextCard() }).length
    ).toBe(1);
  });
  test("Increments length of cards by one", () => {
    expect(
      dealerHitCard({
        dealerCards: [nextCard()(), nextCard()()],
        nextCard: nextCard(),
      }).length
    ).toBe(3);
  });
});

describe("Test initDealercards", () => {
  const nextCard = getNextCard();

  test("Returns array of two elements", () => {
    expect(initDealerCards({ nextCard: nextCard() }).length).toBe(2);
  });
  test("Reaturns array of type Card", () => {
    expect(initDealerCards({ nextCard: nextCard() })).toBeInstanceOf(
      Array<Card>
    );
  });
});
