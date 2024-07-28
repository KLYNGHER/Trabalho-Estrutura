import MostFrequentFinder from '../src/MostFrequentFinder.js';

/**
 * Test suite for MostFrequentFinder.
 */
describe('MostFrequentFinder', () => {
  
  /**
   * Test case: Finds the most frequent element in an array of numbers.
   */
  test('finds the most frequent element in an array of numbers', () => {
    const finder = new MostFrequentFinder([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
    expect(finder.findMostFrequent()).toBe(4);
  });

  /**
   * Test case: Finds the most frequent element in an array of strings.
   */
  test('finds the most frequent element in an array of strings', () => {
    const finder = new MostFrequentFinder(['a', 'b', 'b', 'c', 'c', 'c']);
    expect(finder.findMostFrequent()).toBe('c');
  });

  /**
   * Test case: Finds the most frequent element in an array with one element.
   */
  test('finds the most frequent element in an array with one element', () => {
    const finder = new MostFrequentFinder([1]);
    expect(finder.findMostFrequent()).toBe(1);
  });

  /**
   * Test case: Returns null for an empty array.
   */
  test('returns null for an empty array', () => {
    const finder = new MostFrequentFinder([]);
    expect(finder.findMostFrequent()).toBeNull();
  });
});
