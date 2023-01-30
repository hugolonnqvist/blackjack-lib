import { describe, test, expect } from "@jest/globals";
import Card from "../../src/models/Card";
import getNextCard from "../../src/dealCards/getNextCard";
import initDealerCards from "../../src/dealCards/dealerCards/initDealerCards";
import dealerHitCard from "../../src/dealCards/dealerCards/dealerHitCard";

describe("Test dealerHitCard", () => {
  test("Can hit empty array", () => {
    expect(
      dealerHitCard({ dealerCards: [], nextCard: getNextCard() }).length
    ).toBe(1);
  });
  test("Increments length of cards by one", () => {
    expect(
      dealerHitCard({
        dealerCards: [getNextCard()(), getNextCard()()],
        nextCard: getNextCard(),
      }).length
    ).toBe(3);
  });

  describe("Test initDealercards", () => {
    test("Returns array of two elements", () => {
      expect(initDealerCards({ nextCard: getNextCard() }).length).toBe(2);
    });
    test("Reaturns array of type Card", () => {
      expect(initDealerCards({ nextCard: getNextCard() })).toBeInstanceOf(
        Array<Card>
      );
    });
  });
});
