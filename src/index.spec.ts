import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("should return true if time 1 is before time 2", () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBe(true);
  });

  it("should return false if time 1 is after time 2", () => {
    expect(militaryTimeValidator("15:12 - 14:32")).toBe(false);
  });

  it("should return false if time 1 is equal to time 2", () => {
    expect(militaryTimeValidator("14:32 - 14:32")).toBe(false);
  });
});
