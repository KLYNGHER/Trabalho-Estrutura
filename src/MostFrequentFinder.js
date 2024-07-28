/**
 * Class to find the most frequent element in an array.
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
     * Finds the most frequent element in the array.
     * @returns {any} The most frequent element.
     */
    findMostFrequent() {
      const frequencyMap = new Map();
      let mostFrequent = null;
      let maxCount = 0;
  
      this.elements.forEach(element => {
        const count = (frequencyMap.get(element) || 0) + 1;
        frequencyMap.set(element, count);
  
        if (count > maxCount) {
          mostFrequent = element;
          maxCount = count;
        }
      });
  
      return mostFrequent;
    }
  }
  
  
  