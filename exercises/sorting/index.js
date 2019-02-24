// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                let a = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = a;            
            }
        }
    }

    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
