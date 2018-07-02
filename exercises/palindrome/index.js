// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

var res = palindrome('bob');
console.log(res);

function palindrome(str) {
    return str.split('').every((c, i) => {
        return c === str[str.length - i - 1];
    });
}

module.exports = palindrome;

// function palindrome(str) {
//     return str == str.split('').reverse().join('');
// }
