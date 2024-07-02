/*
Define a function addTwoToEnd that has three parameters. The first parameter
should be an array. The function should add the last two parameters to the end
of the array as elements. It should return the original array mutated.
*/

// Your code here 
function addTwoToEnd (array, par1, par2) {
    array.push(par1, par2);
    return array;
}

console.log(addTwoToEnd(["a", "b", "c"], ["1", "2", "3"], ["x", "y", "z"]));

// let arr1 = ['a', 'b'];
// let added1 = addTwoToEnd(arr1, 'c', 'd');
// console.log(added1);          // ['a', 'b', 'c', 'd']
// console.log(arr1 === added1); // true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = addTwoToEnd;