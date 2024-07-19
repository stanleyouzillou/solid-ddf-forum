import { evaluateBooleanExpression } from "./index";

describe("evaluateBooleanExpression", () => {
  describe("Single values", () => {
    it('should evaluate "TRUE" as true', () => {
      expect(evaluateBooleanExpression("TRUE")).toBe(true);
    });

    it('should evaluate "FALSE" as false', () => {
      expect(evaluateBooleanExpression("FALSE")).toBe(false);
    });
  });

  describe("NOT operator", () => {
    it('should evaluate "NOT TRUE" as false', () => {
      expect(evaluateBooleanExpression("NOT TRUE")).toBe(false);
    });

    it('should evaluate "NOT FALSE" as true', () => {
      expect(evaluateBooleanExpression("NOT FALSE")).toBe(true);
    });
  });

  describe("AND operator", () => {
    it('should evaluate "TRUE AND FALSE" as false', () => {
      expect(evaluateBooleanExpression("TRUE AND FALSE")).toBe(false);
    });

    it('should evaluate "TRUE AND TRUE" as true', () => {
      expect(evaluateBooleanExpression("TRUE AND TRUE")).toBe(true);
    });
  });

  describe("OR operator", () => {
    it('should evaluate "TRUE OR FALSE" as true', () => {
      expect(evaluateBooleanExpression("TRUE OR FALSE")).toBe(true);
    });

    it('should evaluate "FALSE OR FALSE" as false', () => {
      expect(evaluateBooleanExpression("FALSE OR FALSE")).toBe(false);
    });
  });

  describe("Combination of operators with precedence", () => {
    it('should evaluate "TRUE OR TRUE OR TRUE AND FALSE" as true', () => {
      expect(evaluateBooleanExpression("TRUE OR TRUE OR TRUE AND FALSE")).toBe(
        true
      );
    });

    it('should evaluate "TRUE OR FALSE AND NOT FALSE" as true', () => {
      expect(evaluateBooleanExpression("TRUE OR FALSE AND NOT FALSE")).toBe(
        true
      );
    });
  });

  describe("Parentheses", () => {
    it('should evaluate "(TRUE OR TRUE OR TRUE) AND FALSE" as false', () => {
      expect(
        evaluateBooleanExpression("(TRUE OR TRUE OR TRUE) AND FALSE")
      ).toBe(false);
    });

    it('should evaluate "NOT (TRUE AND TRUE)" as false', () => {
      expect(evaluateBooleanExpression("NOT (TRUE AND TRUE)")).toBe(false);
    });
  });
});
