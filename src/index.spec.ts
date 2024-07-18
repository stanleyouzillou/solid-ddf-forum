import { Calculator } from ".";

describe("stats calculator", () => {
  //Arrange
  let example = [2, 4, 21, -8, 53, 40];
  // Act

  // Assert

  it("should return -8 as the minimum value for the sequence [2, 4, 21, -8, 53, 40]", () => {
    expect(Calculator.minimum(example)).toBe(-8);
  });
  it("should return 53 as the maximum value for the sequence [2, 4, 21, -8, 53, 40]", () => {
    expect(Calculator.maximum(example)).toBe(53);
  });
  it("should prints 6 as the number of element in the sequence", () => {
    expect(Calculator.printLength(example)).toBe(6);
  });
});
