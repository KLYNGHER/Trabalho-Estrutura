/**
 * Class to find the most frequent element(s) in an array.
 */
export default class MostFrequentFinder {
  /**
   * Constructor to initialize the array of elements.
   * @param {Array} elements - The array of elements.
   */
  constructor(elements) {
      this.elements = elements;
  }

  /**
   * Finds the most frequent element(s) in the array.
   * If multiple elements have the same maximum frequency, they are all returned.
   * @returns {Array} The most frequent element(s) in the array. Returns an empty array if the input is empty.
   */
  findMostFrequent() {
      if (this.elements.length === 0) {
          return [];
      }

      const frequencyMap = new Map();
      let mostFrequent = [];
      let maxCount = 0;

      this.elements.forEach(element => {
          const count = (frequencyMap.get(element) || 0) + 1;
          frequencyMap.set(element, count);

          if (count > maxCount) {
              mostFrequent = [element];
              maxCount = count;
          } else if (count === maxCount) {
              mostFrequent.push(element);
          }
      });

      return mostFrequent;
  }
}