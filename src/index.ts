export function evaluateBooleanExpression(expression: string): boolean {
  if (expression === "TRUE") {
    return true;
  }
  if (expression === "FALSE") {
    return false;
  }
  throw new Error("Invalid expression");
}
