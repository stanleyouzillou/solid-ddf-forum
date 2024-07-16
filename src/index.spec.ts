import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz function", () => {
  it("should return a string", () => {
    expect(fizzBuzz(3)).toEqual(expect.any(String));
  });
});
