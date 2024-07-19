import { militaryTimeValidator } from "./index";

describe("militaryTimeValidator", () => {
  it('should return true for valid time format "01:12 - 14:32"', () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBe(true);
  });

  it('should return false for invalid time format "1:12 - 14:32"', () => {
    expect(militaryTimeValidator("1:12 - 14:32")).toBe(false);
  });

  it("should validate correct time formats with valid hour and minute ranges", () => {
    expect(militaryTimeValidator("00:00 - 23:59")).toBe(true);
    expect(militaryTimeValidator("00:00 - 00:01")).toBe(true);
  });

  it("should invalidate correct time formats with invalid hour or minute ranges", () => {
    expect(militaryTimeValidator("25:00 - 14:32")).toBe(false);
    expect(militaryTimeValidator("14:60 - 14:32")).toBe(false);
    expect(militaryTimeValidator("12:00 - 24:01")).toBe(false);
    expect(militaryTimeValidator("12:00 - 24:00")).toBe(false);
  });

  it("should validate that time 1 is before time 2", () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBe(true);
    expect(militaryTimeValidator("14:32 - 01:12")).toBe(false);
    expect(militaryTimeValidator("14:32 - 14:32")).toBe(false);
    expect(militaryTimeValidator("23:59 - 00:00")).toBe(false);
    expect(militaryTimeValidator("23:59 - 23:59")).toBe(false);
  });
});
