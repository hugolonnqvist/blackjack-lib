import { describe, test, expect } from "@jest/globals";
import doubleBet from "./doubleBet";

describe("Test doubleBet", () => {
  const totalMoney = 100;
  const handBets = [10, 25, 10];
  const handIndex = 1;

  test("Returns correct totalmoney", () => {
    expect(
      doubleBet({ totalMoney, handBets, handIndex }).newTotalMoney
    ).toStrictEqual(75);
  });

  test("Updates handBets", () => {
    expect(
      doubleBet({ totalMoney, handBets, handIndex }).newHandBets
    ).toStrictEqual([10, 50, 10]);
  });
});
