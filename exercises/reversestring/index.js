// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

var a = reverse('12345');
console.log(a);

function reverse(str) {
    let res = '';
    for (let c of str) {
        res = c + res;
    }
    return res;
}

module.exports = reverse;

// function reverse(str) {
//     var res = '';
//     for (let i = 0; i < str.length; i++) {
//         var element = str[str.length - i - 1];
//         res += element;
//     }
//     return res;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }