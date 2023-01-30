import { describe, test, expect } from "@jest/globals";
import getNextCard from "../../src/dealCards/getNextCard";
import playerHitCard from "../../src/dealCards/playerCards/playerHitCard";
import initPlayerCards from "../../src/dealCards/playerCards/initPlayerCards";
import Card from "../models/Card";

describe("Test playerHitCards", () => {
  test("Increments chosen hand by one card", () => {
    expect(
      playerHitCard({
        playerCards: [[getNextCard()()]],
        handIndex: 0,
        nextCard: getNextCard(),
      })[0].length
    ).toBe(2);
  });

  test("Can hit any hand", () => {
    const handIndex = Math.floor(Math.random() * 3);

    expect(
      playerHitCard({
        playerCards: [[getNextCard()()], [getNextCard()()], [getNextCard()()]],
        handIndex,
        nextCard: getNextCard(),
      })[handIndex].length
    ).toBe(2);
  });
});

describe("Test initPlayerCards", () => {
  const players = Math.floor(Math.random() * 5);
  test("Returns correct number of hands", () => {
    expect(initPlayerCards({ players, nextCard: getNextCard() }).length).toBe(
      players
    );
  });

  test("Returns hands of array of type Card", () => {
    expect(
      initPlayerCards({ players, nextCard: getNextCard() })
    ).toBeInstanceOf(Array<Array<Card>>);
  });
});
