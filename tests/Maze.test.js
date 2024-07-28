import { findPathInMaze } from '../src/Maze.js';

describe('findPathInMaze', () => {
  /**
   * Test to find the path in a simple maze.
   */
  test('finds the path in a simple maze', () => {
    const maze = [
      [0, 0, 1, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 0]
    ];
    const expectedPath = [
      [0, 0], [0, 1], [1, 1], [2, 1], [2, 2], [2, 3], [3, 3]
    ];
    expect(findPathInMaze(maze)).toEqual(expectedPath);
  });

  /**
   * Test to return null if there is no path.
   */
  test('returns null if there is no path', () => {
    const maze = [
      [0, 1, 1, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 0]
    ];
    expect(findPathInMaze(maze)).toBeNull();
  });
});
