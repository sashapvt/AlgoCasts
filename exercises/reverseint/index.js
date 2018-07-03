// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

console.log(reverseInt(-15000))

function reverseInt(n) {
    let pref = Math.sign(n) == -1 ? '-' : '';
    let res = parseInt(pref + n.toString().split('').reverse().join(''));

    return res;
}

module.exports = reverseInt;
