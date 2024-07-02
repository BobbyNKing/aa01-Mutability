/*
Write a function fizzBuzz(max) that accepts a number as an arg. The function
should return an array containing all positive numbers less than max that are
divisible by either 3 or 5, but not both.
*/

// Your code here 
function fizzBuzz(max) {
    let i = 1; 
    let array = []; //array we are outputting

        while (i < max) { //noninclusive because problem does not want to consider last number anyway
            if (i % 3 === 0 && i % 5 === 0) { //if both divisible by 3 and 5 run code
                i++; //run loop again, we dont want this value
            } else if ((i % 3 === 0) && !(i% 5 === 0)) {//if divisible by 3 and not 5 run code
                array.push(i); //divisible by 3, add to output array
                i++; //run loop again
            } else if (!(i % 3 === 0) && (i % 5 === 0)) {//if divisible by 5 and not 3
                array.push(i); //add to array
                i++; //run loop again
            } else { //run if none of above conditions are met
                i++; //just run loop again, we do not want this element
            }
        }

        return array;
}


console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;