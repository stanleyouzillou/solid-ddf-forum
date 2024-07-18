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
  static maximum(numbers: number[]): number {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    return maxNumber;
  }
  static printLength(numbers: number[]): number {
    return numbers.length;
  }
  static averageValue(numbers: number[]): number {
    let sumOfSequence = 0;
    const sequenceLength = Calculator.printLength(numbers);
    let average: number;
    numbers.forEach((num) => {
      sumOfSequence += num;
    });
    average = sumOfSequence / sequenceLength;
    return average;
  }
}
