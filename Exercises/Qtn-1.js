// Question 1: Write a JavaScript function to reverse a string. The function should take a string as an argument and return the reversed string. For example, if the input is "hello", the output should be "olleh".
// Solution: To reverse a string in JavaScript, you can use the following methods:
// 1. Using built-in methods: split(), reverse(), and join().
// 2. Using a for loop to iterate through the string in reverse order and build the reversed string manually
// 3. Using recursion to reverse the string by calling the function on a smaller substring until the base case is reached.




// Method 1: reversing a string usiing methods split(), reverser(), join()
function  reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('mussolo'));

// Method 2: reversing a string using a for Loop( Manual Approach)
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('mussolo'));



// Method 3: Using recursion        
function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
    }
}
console.log(reverseString('Hello World!'));
