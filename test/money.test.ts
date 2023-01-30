import { describe, test, expect } from "@jest/globals";
import initBets from "../src/money/initBets";
import doubleBet from "../src/money/doubleBet";
import splitBet from "../src/money/splitBet";

describe("Test initBets", () => {
  test("Returns correct new money", () => {
    expect(
      initBets({ totalMoney: 100, bets: [10, 20, 10] }).newTotalMoney
    ).toBe(60);
  });

  test("Returns same bets as input", () => {
    expect(
      initBets({ totalMoney: 100, bets: [15, 20, 5] }).handBets
    ).toStrictEqual([15, 20, 5]);
  });
});

describe("Test doubleBet", () => {
  test("Returns correct totalmoney", () => {
    expect(
      doubleBet({ totalMoney: 100, handBets: [10, 25, 10], handIndex: 1 })
        .newTotalMoney
    ).toStrictEqual(75);
  });

  test("Updates handBets", () => {
    expect(
      doubleBet({ totalMoney: 100, handBets: [10, 25, 10], handIndex: 1 })
        .newHandBets
    ).toStrictEqual([10, 50, 10]);
  });
});

describe("Test splitBet", () => {
  const handIndex = Math.floor(Math.random() * 2);

  test("Increments adds one element to bets", () => {
    expect(
      splitBet({ totalMoney: 100, handBets: [10, 20], handIndex }).newBets
        .length
    ).toBe(3);
  });
});
