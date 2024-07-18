import { Calculator } from ".";

describe("stats calculator", () => {
  it("should print -8 as the minimum value for the given sequence of number [2, 4, 21, -8, 53, 40]", () => {
    expect(Calculator.minimum([2, 4, -21, -8, 53, 40])).toBe(-21);
  });
});
