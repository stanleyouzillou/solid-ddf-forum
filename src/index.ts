export function militaryTimeValidator(timeRange: string): boolean {
  const timeFormatRegex = /^(\d{2}):(\d{2}) - (\d{2}):(\d{2})$/;
  const match = timeRange.match(timeFormatRegex);

  if (match) {
    const [, XH, XM, YH, YM] = match;

    const hourXH = parseInt(XH, 10);
    const minuteXM = parseInt(XM, 10);
    const hourYH = parseInt(YH, 10);
    const minuteYM = parseInt(YM, 10);

    const isValidHour =
      hourXH >= 0 && hourXH <= 23 && hourYH >= 0 && hourYH <= 23;
    const isValidMinute =
      minuteXM >= 0 && minuteXM <= 59 && minuteYM >= 0 && minuteYM <= 59;

    if (!isValidHour || !isValidMinute) {
      return false;
    }

    if (hourXH > hourYH) {
      return false;
    } else if (hourXH === hourYH) {
      return minuteXM < minuteYM;
    }

    return true;
  }
  return false;
}
