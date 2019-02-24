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
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[min]) {
                min = k          
            }
        }
        if (min != i) {
            let a = arr[i];
            arr[i] = arr[min];
            arr[min] = a;
        }
    }

    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results,...left,...right];
}

module.exports = { bubbleSort, selectionSort, merge, mergeSort };
