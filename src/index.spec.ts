import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("should return true for valid hours and minutes", () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBe(true);
  });

  it("should return false for invalid hours or minutes", () => {
    expect(militaryTimeValidator("25:12 - 14:32")).toBe(false);
  });
});
