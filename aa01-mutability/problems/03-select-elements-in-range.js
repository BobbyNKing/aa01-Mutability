/*
Define a function called selectElementsInRange that takes in three parameters.
The first parameter should be an array. The second parameter should be a
starting number in a range of indices, and the third parameter should be the
ending number in the range. The function should return all elements that have
indices within the range of indices defined by the starting and ending numbers,
inclusive.
*/

// Your code here 
function selectElementsInRange (array, numStart, numEnd) {
    let i = numStart; //like in problem 02, we need to start our i at the minimum range
    let arrayRange = []; //establish a new array that is the desired range of values

    while (i <= numEnd) { //i is equal to numStart, so we can run numEnd against i
       arrayRange.push(array[i]);
       i++;
    }

    return arrayRange; //run the new array

}


console.log(selectElementsInRange([1, 2, 3], 0, 1));        // [1, 2]
console.log(selectElementsInRange([2, 6, 9, 3, 1], 0, 3));  // [2, 6, 9, 3]
console.log(selectElementsInRange([7, 9, 10, 4, 5], 2, 4)); // [10, 4, 5]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = selectElementsInRange;