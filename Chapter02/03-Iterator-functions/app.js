var isEven = function(x) {
    // returns true if x is a multiple of 2
    // console.log(x);
    return (x % 2 == 0) ? true : false;
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Iterating using the 'every' method
// console.log('every method', numbers.every(isEven));

// Iterating using some method
// console.log('some method', numbers.some(isEven));

// Iterating using forEach
// numbers.forEach(function(x) {
//     console.log(('forEach method',x%2 == 0));
// })

// Using map and filter
// var myMap = numbers.map(isEven);
// console.log(myMap);

var evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// Using the reduce method
// numbers.reduce(function(previous, current, index){
//     console.log('index', index);
//     let x = previous + current;
//     console.log('accu', x);
//     return x;
// })

// Iterating using forEach with arrow functions
numbers.forEach(x => {
    // console.log((x % 2 == 0));
})

// Iterating using the for...of loop
for(let n of numbers){
    // console.log((n % 2 == 0) ? 'even' : 'odd');
}

// Using the new ES6 iterator (@@iterator)
let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// Array entries, keys, and values
let aEntries = numbers.entries();
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);

let aKeys = numbers.keys();
// console.log(aKeys.next());
// console.log(aKeys.next());
// console.log(aKeys.next());

// Using the from method - did not work as written in the book
let evens = Array.from(numbers, x => (x % 2 == 0));
// console.log(evens);

// Using copyWithin method
let copyArray = [1,2,3,4,5,6]
// copyArray.copyWithin(0, 3);
copyArray.copyWithin(1, 3, 5);
// console.log(copyArray);

// Sorting elements
numbers.reverse();
console.log('reversed',numbers);

numbers.sort();
console.log('sorted',numbers);

// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log('custom sorted',numbers);

function compare(a, b) {
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    // a must be equal to b
    return 0
}

numbers.sort(compare);
// console.log('compare sorted',numbers);


// Custom sorting
var friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

function comparePerson(a, b){
    if(a.age < b.age){
        return -1
    }
    if(a.age > b.age){
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson))
