/*
Define a function called mirror that takes in an array as a parameter and
returns a new array where all the elements in the original array added to the
new array twice with the second set of elements in reverse order.
*/

// Your code here 
function mirror(array) {
    let i = (array.length - 1); //since we're going backwards through the array, lets start i at the end

        while (i > -1) {//index is moving backwards through array, with last loop being index 0
            array.push(array[i]); //repeat array elements but in reverse
            i--; //since we're moving backwards, we decrease index instead of adding
        }
        return array;
    }
console.log(mirror([1,2,3])); //=> [ 1, 2, 3, 3, 2, 1 ]
console.log(mirror(['a', 'b', 'c', 'd']));
// //=> [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mirror;