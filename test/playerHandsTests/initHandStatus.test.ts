import { describe, test, expect } from "@jest/globals";
import initHandStatus from "../../src/playerHands/initHandStatus";

describe("Test initHandStatus", () => {
  const players = Math.floor(Math.random() * 3);

  test("Returns correct canHit array", () => {
    expect(initHandStatus(players).canHit).toStrictEqual(
      Array(players).fill(true)
    );
  });

  test("Returns correct canDouble array", () => {
    expect(initHandStatus(players).canDouble).toStrictEqual(
      Array(players).fill(true)
    );
  });
});
