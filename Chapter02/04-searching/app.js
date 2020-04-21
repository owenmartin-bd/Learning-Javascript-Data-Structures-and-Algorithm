
// find and findIndex methods
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function multipleOf13(element, index, array){
    return (element % 13 === 0) ? true : false;
}

console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

// includes method
let numbers2 = [7,6,5,4,3,2,1];
console.log(numbers2.includes(4,5));

// Outputting the array into a string
console.log(numbers.toString());

var numbersString = numbers.join('-');
console.log(numbersString);

// TypedArray class

let length = 5;
let int16 = new Int16Array(length);

let array16 = [];
array16.length = length;

for (let i = 0; i < length; i++) {
    int16[i] = i+1;
}

console.log(int16);