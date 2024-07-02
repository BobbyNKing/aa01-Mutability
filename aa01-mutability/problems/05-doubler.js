/*
Define a function doubler that takes an array of numbers and returns the same
array but every element of the array is multiplied by 2.
*/

// Your code here 
function doubler(array) {
    let i = 0; //we need to run through each piece of array, so start at 0
   
    while (i < array.length) { //as long as i is less than the array's length, run loop
        console.log(array[i]);
        array[i] = array[i] * 2; //we must double each array value, array at index i will now mutate doubled
        console.log(array[i]);
        i++; //run loop again until i = array.length
    }
    return array;
}

let nums1 = [1, 2, 3, 4];
let doubled1 = doubler(nums1)
console.log(doubled1);          //=> [2, 4, 6, 8]
console.log(nums1 === doubled1) //=> true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubler;