import SecondLargestFinder from '../src/SecondLargestFinder.js';

/**
 * Test suite for SecondLargestFinder.
 */
describe('SecondLargestFinder', () => {
  
  /**
   * Test case: Finds the second largest number in a basic array.
   */
  test('finds the second largest number in an array', () => {
    const finder = new SecondLargestFinder([1, 2, 3, 4, 5]);
    expect(finder.findSecondLargest()).toBe(4);
  });

  /**
   * Test case: Finds the second largest number in an array with duplicates.
   */
  test('finds the second largest number with duplicates', () => {
    const finder = new SecondLargestFinder([10, 20, 20, 30, 30]);
    expect(finder.findSecondLargest()).toBe(20);
  });

  /**
   * Test case: Finds the second largest number when largest number is negative.
   */
  test('finds the second largest number when largest number is negative', () => {
    const finder = new SecondLargestFinder([-1, -2, -3, -4, -5]);
    expect(finder.findSecondLargest()).toBe(-2);
  });

  /**
   * Test case: Throws an error when the array has less than two elements.
   */
  test('throws an error when array has less than two elements', () => {
    const finder = new SecondLargestFinder([1]);
    expect(() => finder.findSecondLargest()).toThrow('Array must contain at least two elements');
  });

  /**
   * Test case: Throws an error when there is no second largest element.
   */
  test('throws an error when there is no second largest element', () => {
    const finder = new SecondLargestFinder([5, 5, 5]);
    expect(() => finder.findSecondLargest()).toThrow('There is no second largest element');
  });
});
