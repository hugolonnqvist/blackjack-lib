import { describe, test, expect } from "@jest/globals";
import generateDeck from "../../src/deck/generateDeck";

describe("Test generateDeck", () => {
  test("Can generate 1 deck", () => {
    expect(generateDeck(1).length).toBe(52);
  });

  test("Can generate multiple decks", () => {
    expect(generateDeck(5).length).toBe(52 * 5);
  });
});
