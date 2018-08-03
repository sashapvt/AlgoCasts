// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));

function anagrams(stringA, stringB) {
    const stringA2 = stringA.replace(/[^\w]/g, "").toUpperCase().split('').sort().join('');
    const stringB2 = stringB.replace(/[^\w]/g, "").toUpperCase().split('').sort().join('');
    return stringA2 == stringB2;
    console.log(stringA2);
    console.log(stringB2);
}

module.exports = anagrams;
