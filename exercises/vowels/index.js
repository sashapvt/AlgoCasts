// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

console.log(vowels('Why do you ask?'));

function vowels(str) {
    const vows = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let c of str) {
        if (vows.includes(c.toLowerCase())) count++;
    }

    return count;
}

module.exports = vowels;
