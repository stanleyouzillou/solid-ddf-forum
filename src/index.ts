export class Calculator {
  static minimum(numbers: number[]): number {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minNumber) {
        minNumber = numbers[i];
      }
    }
    return minNumber;
  }
}
