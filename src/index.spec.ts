import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz function", () => {
  it("should return a string", () => {
    expect(fizzBuzz(3)).toEqual(expect.any(String));
  });

  describe('returns "Fizz" for multiples of 3', () => {
    it.each([3, 6, 9])('returns "Fizz for multiples of 3', (value: number) => {
      expect(fizzBuzz(value)).toBe("Fizz");
    });
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
