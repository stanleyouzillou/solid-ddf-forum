import { evaluateBooleanExpression } from "./index";

describe("boolean calculator", () => {
  it('should evaluate "TRUE" as true', () => {
    expect(evaluateBooleanExpression("TRUE")).toBe(true);
  });
  it('should evaluate "FALSE" as false', () => {
    expect(evaluateBooleanExpression("FALSE")).toBe(false);
  });
  it('should evaluate "NOT TRUE" as false', () => {
    expect(evaluateBooleanExpression("NOT TRUE")).toBe(false);
  });
  it('should evaluate "TRUE AND FALSE" as false', () => {
    expect(evaluateBooleanExpression("TRUE AND FALSE")).toBe(false);
  });
  it('should evaluate "TRUE AND TRUE" as true', () => {
    expect(evaluateBooleanExpression("TRUE AND TRUE")).toBe(true);
  });
});
