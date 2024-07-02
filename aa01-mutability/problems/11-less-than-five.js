/*
Define a function lessThan5 that takes an array of numbers and returns a NEW
array containing all the numbers in the input array that are less than 5.
*/

// Your code here 
function lessThan5(array) {
    let i = 0; 
    let newArray = [];

    while (i < array.length) { //just so we run through whole array
        if (array[i] < 5) {
            newArray.push(array[i]);
            i++;
        } else {
            i++;
        }
    }
    return newArray;

}

let nums1 = [1, -5, 10, 6, 2];
let filteredNums1 = lessThan5(nums1);
console.log(filteredNums1);           //=> [1, -5, 2]
console.log(nums1 === filteredNums1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lessThan5;