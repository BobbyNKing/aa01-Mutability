/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/

// Your code here 
function oddRange (num) {
    let i = 1; //we'll start our index at 1 this time, since we'll always at least have that number
    let array = [];

    while (i <= num) {
        if (i % 2 === 0) { //if even number
            i++; //we only want to capture odd values, so run loop again
        } else {
            array.push(i); //i was not even, so capture odd number
            i++; //run loop again
        }
    }
    return array;
}


console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddRange;