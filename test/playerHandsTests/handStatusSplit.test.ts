import { describe, test, expect } from "@jest/globals";
import handStatusSplit from "../../src/playerHands/handStatusSplit";

describe("Test handStatusSplit", () => {
  test("Returns correct new element for the canHit", () => {
    const handIndex = Math.floor(Math.random() * 3);
    expect(
      handStatusSplit({
        canHit: [true, true, true],
        canDouble: [false, false, false],
        handIndex,
      }).newCanHit[handIndex + 1]
    ).toBeTruthy();
  });

  test("Returns correct new element for the canDouble", () => {
    const handIndex = Math.floor(Math.random() * 3);
    expect(
      handStatusSplit({
        canHit: [true, true, true],
        canDouble: [false, false, false],
        handIndex,
      }).newCanDouble[handIndex + 1]
    ).toBeTruthy();
  });

  test("Returns correct arrays", () => {
    expect(
      handStatusSplit({
        canHit: [true, true, false],
        canDouble: [false, false, false],
        handIndex: 1,
      })
    ).toStrictEqual({
      newCanHit: [true, true, true, false],
      newCanDouble: [false, false, true, false],
    });
  });
});
