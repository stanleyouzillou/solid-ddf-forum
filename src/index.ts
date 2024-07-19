export function evaluateBooleanExpression(expression: string): boolean {
  // Handle parentheses
  while (expression.includes("(")) {
    const openIndex = expression.lastIndexOf("(");
    const closeIndex = expression.indexOf(")", openIndex);
    const subExpression = expression.slice(openIndex + 1, closeIndex);
    const subResult = evaluateBooleanExpression(subExpression);
    expression =
      expression.slice(0, openIndex) +
      (subResult ? "TRUE" : "FALSE") +
      expression.slice(closeIndex + 1);
  }

  // Handle remaining expression
  if (expression === "TRUE") {
    return true;
  }
  if (expression === "FALSE") {
    return false;
  }
  if (expression.startsWith("NOT ")) {
    return !evaluateBooleanExpression(expression.slice(4));
  }
  const andIndex = expression.indexOf(" AND ");
  const orIndex = expression.indexOf(" OR ");

  if (andIndex > -1 && (orIndex === -1 || andIndex < orIndex)) {
    const parts = expression.split(" AND ");
    return parts.every((part) => evaluateBooleanExpression(part));
  }
  if (orIndex > -1) {
    const parts = expression.split(" OR ");
    return parts.some((part) => evaluateBooleanExpression(part));
  }
  throw new Error("Invalid expression");
}
