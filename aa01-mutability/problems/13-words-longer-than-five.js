/*
Define a function wordsLongerThan5 that takes in an array of words. The
function should return a NEW array containing only the words that are longer
than 5 characters.
*/

// Your code here 
function wordsLongerThan5(array) {
    let newArray = []; 
    let i = 0; 

    while (i < array.length) {
        if (array[i].length > 5) { //if length of element at index is greater than 5
            newArray.push(array[i]); //add word to newArray if it meets the condition
            i++; //rerun loop
        } else { //element did not meet condition
            i++; //still rerun loop
        }
    }

    return newArray;
}

let words1 = ['bike', 'skateboard','scooter', 'moped'];
let longerWords1 = wordsLongerThan5(words1);
console.log(longerWords1);            //=> [ 'skateboard', 'scooter' ]
console.log(words1 === longerWords1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordsLongerThan5;