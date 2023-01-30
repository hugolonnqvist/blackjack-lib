import { describe, test, expect } from "@jest/globals";
import initBets from "../src/money/initBets";
import doubleBet from "../src/money/doubleBet";
import splitBet from "../src/money/splitBet";
import updateMoney from "../src/money/updateMoney";

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

  test("Returns correct new total money", () => {
    const totalMoney = 100;
    const handBets = [10, 20, 30];
    expect(splitBet({ totalMoney, handBets, handIndex }).newTotalMoney).toBe(
      totalMoney - handBets[handIndex]
    );
  });

  test("Returns correct new bets", () => {
    const handBets = [50, 20, 30];
    expect(
      splitBet({ totalMoney: 100, handBets, handIndex: 1 }).newBets
    ).toStrictEqual([50, 20, 20, 30]);
  });
});

describe("Test updateMoney", () => {
  const handBets = [10, 20, 10];

  test("Returns correct new total money with blackjack result", () => {
    expect(
      updateMoney({
        totalMoney: 100,
        handBets,
        handIndex: 1,
        result: "Blackjack",
      })
    ).toBe(150);
  });

  test("Returns correct new total money with win result", () => {
    expect(
      updateMoney({
        totalMoney: 100,
        handBets,
        handIndex: 1,
        result: "Win",
      })
    ).toBe(140);
  });

  test("Returns correct new total money with lost result", () => {
    expect(
      updateMoney({
        totalMoney: 100,
        handBets,
        handIndex: 1,
        result: "Lost",
      })
    ).toBe(100);
  });

  test("Returns correct new total money with push result", () => {
    expect(
      updateMoney({
        totalMoney: 100,
        handBets,
        handIndex: 1,
        result: "Push",
      })
    ).toBe(120);
  });
});
