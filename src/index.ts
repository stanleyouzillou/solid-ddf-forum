export function militaryTimeValidator(timeRange: string): boolean {
  const timeFormatRegex = /^\d{2}:\d{2} - \d{2}:\d{2}$/;
  return timeFormatRegex.test(timeRange);
}
