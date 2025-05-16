// Qtn-2: Write a function that takes an array of numbers and returns the largest number in the array.
// Solution: To find the largest number in an array of numbers, you can use the following methods:
// 1. Using the Math.max() function with the spread operator.
// 2. Using a for loop to iterate through the array and keep track of the largest number.

// Method 1: Using the Math.max() function with the spread operator
function findLargest(aray) {
  return Math.max(...aray);
}
const aray = [3000, 5600, 250000, 84000, 113000, 85000];
console.log(findLargest(aray)); // Output: 250000


// Method 2. Using the for loop to iterate through the array and keep track of the largest number.
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const arr = [3000, 5600, 250000, 84000, 113000, 85000];
console.log(findLargest(arr)); // Output: 250000