/**
 * Class to find the second largest number in an array.
 */
export default class SecondLargestFinder {
  /**
   * Constructor to initialize the array of numbers.
   * @param {number[]} numbers - The array of numbers.
   */
  constructor(numbers) {
    this.numbers = numbers;
  }

  /**
   * Finds the second largest number in the array.
   * @returns {number} The second largest number.
   * @throws Will throw an error if the array has less than two elements or there is no second largest element.
   */
  findSecondLargest() {
    if (this.numbers.length < 2) {
      throw new Error('Array must contain at least two elements');
    }

    let firstLargest = null;
    let secondLargest = null;

    this.numbers.forEach(number => {
      if (firstLargest === null || number > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = number;
      } else if ((secondLargest === null || number > secondLargest) && number < firstLargest) {
        secondLargest = number;
      }
    });

    if (secondLargest === null) {
      throw new Error('There is no second largest element');
    }

    return secondLargest;
  }
}
