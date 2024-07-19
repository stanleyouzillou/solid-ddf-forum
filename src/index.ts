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
  if (expression.includes(" AND ")) {
    const parts = expression.split(" AND ");
    return parts.every((part) => evaluateBooleanExpression(part));
  }
  if (expression.includes(" OR ")) {
    const parts = expression.split(" OR ");
    return parts.some((part) => evaluateBooleanExpression(part));
  }

  throw new Error("Invalid expression");
}
