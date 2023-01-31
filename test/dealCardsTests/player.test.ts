import { describe, test, expect } from "@jest/globals";
import getNextCard from "../../src/deck/getNextCard";
import playerHitCard from "../../src/dealCards/playerCards/playerHitCard";
import initPlayerCards from "../../src/dealCards/playerCards/initPlayerCards";
import Card from "../../src/models/Card";

describe("Test playerHitCards", () => {
  const nextCard = getNextCard();

  test("Increments chosen hand by one card", () => {
    expect(
      playerHitCard({
        playerCards: [[nextCard()()]],
        handIndex: 0,
        nextCard: nextCard(),
      })[0].length
    ).toBe(2);
  });

  test("Can hit any hand", () => {
    const handIndex = Math.floor(Math.random() * 3);

    expect(
      playerHitCard({
        playerCards: [[nextCard()()], [nextCard()()], [nextCard()()]],
        handIndex,
        nextCard: nextCard(),
      })[handIndex].length
    ).toBe(2);
  });
});

describe("Test initPlayerCards", () => {
  const nextCard = getNextCard();

  const players = Math.floor(Math.random() * 5);
  test("Returns correct number of hands", () => {
    expect(initPlayerCards({ players, nextCard: nextCard() }).length).toBe(
      players
    );
  });

  test("Returns hands of array of type Card", () => {
    expect(initPlayerCards({ players, nextCard: nextCard() })).toBeInstanceOf(
      Array<Array<Card>>
    );
  });
});
