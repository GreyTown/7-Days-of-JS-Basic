// Method 1: reversing a string usiing methods split(), reverser(), join()

// function  reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('mussolo'));


// Method 2: reversing a string using a for Loop( Manual Approach)
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('mussolo'));



// reversing a string using javscript methods split(), reverser(), join()


// reversing a string using a for Loop( Manual Approach)
