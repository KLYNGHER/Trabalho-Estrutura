/**
 * Class to find pairs in an array that sum to a target number.
 */
export default class PairsFinder {
  /**
   * Constructor to initialize the array of numbers and the target sum.
   * @param {number[]} numbers - The array of numbers.
   * @param {number} target - The target sum for the pairs.
   */
  constructor(numbers, target) {
    this.numbers = numbers;
    this.target = target;
  }

  /**
   * Finds all pairs of numbers in the array that sum to the target number.
   * @returns {number[][]} An array of pairs that sum to the target number.
   */
  findPairs() {
    const pairs = [];
    const seen = new Set();

    this.numbers.forEach(number => {
      const complement = this.target - number;
      if (seen.has(complement)) {
        pairs.push([number, complement]);
      }
      seen.add(number);
    });

    return pairs;
  }
}
