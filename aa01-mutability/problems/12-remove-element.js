/*
Define a function called removeElements that takes in three parameters. The
first parameter should be an array. The second parameter should be an integer
representing the index of the array at which the function should start removing
elements. The third parameter should be the number of elements that need to be
removed from the array. See test cases for examples.
*/

// Your code here 
function removeElements(array, int, ele) {
    //let i = 0; //int needs to only represent the loops we need to make


    array.splice(int, ele); //this does the same thing as delete but doesn't leave an empty value where it baletes
        //while (i < ele) { //it needs to run at least once
           
            
           
            //delete array[int]; //int is already defined as the space we start deleting
            //int++; //increase index because sequence
            //i++; //run loop again, if ele was 1 and now i goes from 0 to 1, it will only run once. perf
        //}

        return array;
}

console.log(removeElements([1, 2, 3], 1, 1));       // [1, 3]
console.log(removeElements([1, 2, 3], 1, 2));       // [1]
console.log(removeElements([1, 2, 3], 0, 1));       // [2, 3]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeElements;