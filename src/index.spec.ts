import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  describe("extractTimeComponents", () => {
    it('should extract time components for valid time format "01:12 - 14:32"', () => {
      const result = militaryTimeValidator("01:12 - 14:32");
      expect(result).toEqual({ XH: "01", XM: "12", YH: "14", YM: "32" });
    });

    it('should return null for invalid time format "1:12 - 14:32"', () => {
      const result = militaryTimeValidator("1:12 - 14:32");
      expect(result).toBeNull();
    });
  });
});
