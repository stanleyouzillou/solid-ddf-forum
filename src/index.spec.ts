import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz function", () => {
  it("should return a string", () => {
    expect(fizzBuzz(3)).toEqual(expect.any(String));
  });
  it("should return fizz when input is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return buzz for 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
});
