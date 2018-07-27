// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

console.log(chunk([1, 2, 3, 4, 5], 2));

function chunk(array, size) {
    let res = [];

    for(let element of array) {
        const last = res[res.length - 1];
        if (!last || last.length === size) {
            res.push([element]);
        }
        else {
            last.push(element);
        }
    }

    return res;
}

module.exports = chunk;

// function chunk(array, size) {
//     let res = [];
//     let chunkArr = [];
//     for(let i = 0; i < array.length; i++) {
//         chunkArr.push(array[i]);
//         if ((i + 1) % size === 0 || i + 1 == array.length) {
//             res.push(chunkArr);
//             chunkArr = [];
//         }
//     }
//     return res;
// }