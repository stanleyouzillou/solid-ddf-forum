export function militaryTimeValidator(
  timeRange: string
): { XH: string; XM: string; YH: string; YM: string } | null {
  const timeFormatRegex = /^(\d{2}):(\d{2}) - (\d{2}):(\d{2})$/;
  const match = timeRange.match(timeFormatRegex);
  if (match) {
    const [, XH, XM, YH, YM] = match;
    return { XH, XM, YH, YM };
  }
  return null;
}
