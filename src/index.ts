export function evaluateBooleanExpression(expression: string): boolean {
  if (expression === "TRUE") {
    return true;
  }
  if (expression === "FALSE") {
    return false;
  }
  if (expression.startsWith("NOT ")) {
    return !evaluateBooleanExpression(expression.slice(4));
  }

  throw new Error("Invalid expression");
}
