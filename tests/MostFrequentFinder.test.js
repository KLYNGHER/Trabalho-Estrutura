import MostFrequentFinder from '../src/MostFrequentFinder';

/**
 * Test suite for MostFrequentFinder.
 */
describe('MostFrequentFinder', () => {

  /**
   * Test to find the most frequent number in an array with a clear most frequent element.
   */
  test('finds the most frequent number in an array', () => {
    const finder = new MostFrequentFinder([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
    expect(finder.findMostFrequent()).toEqual([4]);
  });

  /**
   * Test to find the most frequent string in an array with a clear most frequent element.
   */
  test('finds the most frequent string in an array', () => {
    const finder = new MostFrequentFinder(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']);
    expect(finder.findMostFrequent()).toEqual(['apple']);
  });

  /**
   * Test to find all most frequent elements in an array when multiple elements have the same frequency.
   */
  test('finds all most frequent elements when there is a tie', () => {
    const finder = new MostFrequentFinder([1, 2, 2, 3, 3]);
    expect(finder.findMostFrequent()).toEqual([2, 3]);
  });

  /**
   * Test to find the most frequent element in an array with only one element.
   */
  test('finds the most frequent element in a single-element array', () => {
    const finder = new MostFrequentFinder([5]);
    expect(finder.findMostFrequent()).toEqual([5]);
  });

  /**
   * Test to ensure that the method returns an empty array for an empty input array.
   */
  test('returns an empty array for an empty input array', () => {
    const finder = new MostFrequentFinder([]);
    expect(finder.findMostFrequent()).toEqual([]);
  });

  /**
   * Test to find the most frequent boolean value in an array of booleans.
   */
  test('finds the most frequent boolean in an array of booleans', () => {
    const finder = new MostFrequentFinder([true, false, true, false, false]);
    expect(finder.findMostFrequent()).toEqual([false]);
  });

});
