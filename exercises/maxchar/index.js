// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

console.log(maxChar("apple 1231111"));

function maxChar(str) {
    let map = {};
    let maxVal = 0;
    let maxChar = '';
    for (let c of str) {
        map[c] = map[c] ? map[c] + 1 : 1;
    }
    for (let m in map) {
        if (map[m] > maxVal) {
            maxVal = map[m];
            maxChar = m;
        }
    }
    return maxChar;
}

module.exports = maxChar;
