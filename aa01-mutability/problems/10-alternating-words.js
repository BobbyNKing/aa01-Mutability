/*
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/

// Your code here 
function alternatingWords(array) {
    let i = 0; //index 0

    while (i < array.length) {
        if (i % 2 === 0) { //if even or 0
            array[i] = array[i].toUpperCase(); //make every even instance upper case
            i++; //rerun loop
        } else { //odd index elements
            array[i] = array[i].toLowerCase(); //make every odd instance lower case
            i++; //rerun loop
        }
    }

    return array;
}

let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = alternatingWords;