import { evaluateBooleanExpression } from "./index";

describe("boolean calculator", () => {
  it('should evaluate "TRUE" as true', () => {
    expect(evaluateBooleanExpression("TRUE")).toBe(true);
  });
  it('should evaluate "FALSE" as false', () => {
    expect(evaluateBooleanExpression("FALSE")).toBe(false);
  });
});
