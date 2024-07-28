import PairsFinder from '../src/PairsFinder.js';

/**
 * Test suite for PairsFinder.
 */
describe('PairsFinder', () => {
  /**
   * Test case: Finds all pairs that sum to the target.
   */
  test('finds all pairs that sum to the target', () => {
    const finder = new PairsFinder([1, 2, 3, 4, 5], 5);
    expect(finder.findPairs()).toEqual([[3, 2], [4, 1]]);
  });

  /**
   * Test case: Finds pairs including negative numbers.
   */
  test('finds pairs including negative numbers', () => {
    const finder = new PairsFinder([1, -2, 3, -4, 5, 6], 1);
    expect(finder.findPairs()).toEqual([[3, -2], [5, -4]]);
  });

  /**
   * Test case: Returns empty array when no pairs sum to the target.
   */
  test('returns empty array when no pairs sum to the target', () => {
    const finder = new PairsFinder([1, 2, 3], 7);
    expect(finder.findPairs()).toEqual([]);
  });

  /**
   * Test case: Handles empty array.
   */
  test('handles empty array', () => {
    const finder = new PairsFinder([], 5);
    expect(finder.findPairs()).toEqual([]);
  });
});
