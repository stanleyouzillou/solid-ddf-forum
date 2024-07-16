import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz function", () => {
  it("should return a string", () => {
    expect(fizzBuzz(3)).toEqual(expect.any(String));
  });
  it("should return Fizz when input is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return Buzz for 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return FizzBuzz for 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz for 9", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
});
