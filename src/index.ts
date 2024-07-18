export class Calculator {
  static findExtreme(
    numbers: number[],
    comparator: (a: number, b: number) => boolean
  ): number {
    let extremeNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (comparator(numbers[i], extremeNumber)) {
        extremeNumber = numbers[i];
      }
    }
    return extremeNumber;
  }

  static minimum(numbers: number[]): number {
    return this.findExtreme(numbers, (a, b) => a < b);
  }

  static maximum(numbers: number[]): number {
    return this.findExtreme(numbers, (a, b) => a > b);
  }

  static printLength(numbers: number[]): number {
    return numbers.length;
  }

  static averageValue(numbers: number[]): number {
    const sumOfSequence = numbers.reduce((sum, num) => sum + num, 0);
    const sequenceLength = this.printLength(numbers);
    return sumOfSequence / sequenceLength;
  }
}
