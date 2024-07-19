import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it('should return true for valid time format "01:12 - 14:32"', () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBe(true);
  });

  it('should return false for invalid time format "1:12 - 14:32"', () => {
    expect(militaryTimeValidator("1:12 - 14:32")).toBe(false);
  });
});
