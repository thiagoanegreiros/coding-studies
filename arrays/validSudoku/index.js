const assert = require('assert')

const isValidSudoku = (board) => {
    const boards = 3;
    const [ boxes, cols, rows ] = getBoards(boards);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

    return searchGrid(board, boxes, cols, rows);    /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

const initBoard = (rows, cols) => new Array(rows).fill()
    .map(() => new Array(cols).fill(false));

const getBoards = (boards) => {
    const [ rows, cols ] = [ 9, 9 ];

    return new Array(boards).fill()
    .map(() => initBoard(rows, cols))
}

const searchGrid = (board, boxes, cols, rows) => {
    const [ _rows, _cols ] = [ 9, 9 ];

    for (let row = 0; row < _rows; row++) {/* Time O(ROWS)*/
        for (let col = 0; col < _cols; col++) {/* Time O(COLS)*/
            const char = board[row][col];
            const index = (Math.floor(row / 3) * 3) + Math.floor(col / 3);

            const isEmpty = char === '.';
            if (isEmpty) continue;

            const hasMoved = boxes[index][char] || cols[col][char] || rows[row][char];
            if (hasMoved) return false;

            rows[row][char] = true;               /* Space O(ROWS * COLS)*/
            cols[col][char] = true;               /* Space O(ROWS * COLS)*/
            boxes[index][char] = true;            /* Space O(ROWS * COLS)*/
        }
    }

    return true;
}

assert.deepEqual(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]), true)

// assert.deepEqual(isValidSudoku([["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]), false)

console.info('Success')