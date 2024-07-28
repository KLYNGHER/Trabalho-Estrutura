/**
 * Class representing a maze.
 */
export class Maze {
    /**
     * Creates a new instance of Maze.
     * @param {number[][]} maze - The maze represented as a 2D array.
     */
    constructor(maze) {
      this.maze = maze;
      this.rows = maze.length;
      this.cols = maze[0].length;
    }
  
    /**
     * Finds a path through the maze from the top-left to the bottom-right.
     * @returns {number[][] | null} The path as an array of coordinates, or null if no path is found.
     */
    findPath() {
      const stack = [];
      const visited = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
      const path = [];
  
      const directions = [
        { row: -1, col: 0 }, // up
        { row: 1, col: 0 },  // down
        { row: 0, col: -1 }, // left
        { row: 0, col: 1 }   // right
      ];
  
      stack.push({ row: 0, col: 0 });
      visited[0][0] = true;
  
      while (stack.length > 0) {
        const current = stack.pop();
        const { row, col } = current;
  
        path.push([row, col]);
  
        if (row === this.rows - 1 && col === this.cols - 1) {
          return path;
        }
  
        for (const direction of directions) {
          const newRow = row + direction.row;
          const newCol = col + direction.col;
  
          if (this.isValid(newRow, newCol, visited)) {
            stack.push({ row: newRow, col: newCol });
            visited[newRow][newCol] = true;
          }
        }
      }
  
      return null; // Path not found
    }
  
    /**
     * Checks if a position is valid for moving into.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @param {boolean[][]} visited - The visited cells.
     * @returns {boolean} True if the position is valid, false otherwise.
     */
    isValid(row, col, visited) {
      return row >= 0 && row < this.rows && col >= 0 && col < this.cols && !visited[row][col] && this.maze[row][col] === 0;
    }
  }
  
  /**
   * Finds a path through a given maze.
   * @param {number[][]} maze - The maze represented as a 2D array.
   * @returns {number[][] | null} The path as an array of coordinates, or null if no path is found.
   */
  export function findPathInMaze(maze) {
    const lab = new Maze(maze);
    return lab.findPath();
  }
  