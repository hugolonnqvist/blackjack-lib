import { describe, test, expect } from "@jest/globals";
import Card from "../../src/models/Card";
import getNextCard from "../../src/dealCards/getNextCard";

describe("Test getNextCard", () => {
  const nextCard = getNextCard();
  test("Returns a valid card element", () => {
    expect(nextCard()).toBeInstanceOf(Card);
  });
});
