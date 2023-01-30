import { describe, test, expect } from "@jest/globals";
import disableHit from "../../src/playerHands/disableHit";
import disableDouble from "../../src/playerHands/disableDouble";
import disableAll from "../../src/playerHands/disableAll";

describe("Test disableHit", () => {
  const canHit = [true, true, true];
  const canDouble = [true, false, true];

  test("Returns correct new canHit array with correct elements", () => {
    expect(
      disableHit({ handIndex: 0, canHit, canDouble }).newCanHit
    ).toStrictEqual([false, true, true]);
  });

  test("Returns correct new canDouble array with correct elements", () => {
    expect(
      disableHit({ handIndex: 0, canHit, canDouble }).newCanDouble
    ).toStrictEqual([false, false, true]);
  });
});

describe("Test disableDouble", () => {
  test("Disables correct element", () => {
    expect(
      disableDouble({ canDouble: [true, false, true], handIndex: 2 })
    ).toStrictEqual([true, false, false]);
  });

  test("Works on already disabled element", () => {
    expect(
      disableDouble({ canDouble: [true, false, true], handIndex: 1 })
    ).toStrictEqual([true, false, true]);
  });
});

describe("Test disable all", () => {
  test("Disables both arrays", () => {
    const disabledArrays = {
      newCanHit: [false, false, false],
      newCanDouble: [false, false, false],
    };
    expect(
      disableAll({
        canHit: [true, false, true],
        canDouble: [false, false, true],
      })
    ).toStrictEqual(disabledArrays);
  });

  test("Works on alredy disabled arrays", () => {
    const disabledArray = Array(Math.floor(Math.random() * 5)).fill(false);
    expect(
      disableAll({ canHit: disabledArray, canDouble: disabledArray })
    ).toStrictEqual({ newCanHit: disabledArray, newCanDouble: disabledArray });
  });
});
