// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

let n = 4;
let res = matrix(n);
for (x = 0; x < n; x++) {
    console.log('[' + res[x].join(',')+']');
}

function matrix(n) {
    const res = [];
    for (x = 0; x < n; x++) res.push(new Array(n));
    let i = 0;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;

    while (rowStart < rowEnd) {
        for (y = colStart; y <= colEnd; y++) {
            res[rowStart][y] = ++i;
        }
        for (x = rowStart + 1; x < rowEnd; x++) {
            res[x][colEnd] = ++i;
        }
        for (y = colEnd; y >= colStart; y--) {
            res[rowEnd][y] = ++i;
        }
        for (x = rowEnd - 1; x > rowStart; x--) {
            res[x][colStart] = ++i;
        }
        if(rowEnd - rowStart == 2) res[rowStart + 1][colStart + 1] = ++i;
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }

    return res;
}

module.exports = matrix;
