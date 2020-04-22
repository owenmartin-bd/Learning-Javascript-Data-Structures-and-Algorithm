// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     push(element){
//         this.items.push(element)
//     }
// }

// ES6 classes with scoped Symbol -----------------
// let _items = Symbol();

// class Stack {
//     constructor() {
//         this[_items] = []
//     }
//     push(element){
//         this[_items].push(element);
//     }
//     print(){
//         console.log(this[_items])
//     }
// }

// let stack = new Stack();
// stack.push(5);
// stack.push(8)
// let objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);
// stack[objectSymbols[0]].push(1);
// stack.print();

// ES6 classes with WeakMap -----------------
const items = new WeakMap();

// class Stack {
//     constructor() {
//         items.set(this, []);
//     }
//     push(element){
//         let s = items.get(this);
//         s.push(element);
//     }
//     pop() {
//         let s = items.get(this);
//         let r = s.pop();
//         return r;
//     }

// }

// Making the items property private
let Stack = (function() {
    const items = new WeakMap();

    class Stack {
        constructor() {
            items.set(this, []);
        }
        push(element){
            let s = items.get(this);
            s.push(element);
        }
        pop() {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
        isEmpty() {
            let s = items.get(this);
            return s.length > 0 ? false : true;
        }
    }
    return Stack;
})();

// Decimal to binary conversion
function dividedBy2(decNumber){
    var remStack = new Stack(),
    rem,
    binaryString = '';

    while(decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += (remStack.pop()).toString();
    }

    return binaryString;
}

console.log(dividedBy2(75));

// The base converter algorithm
function baseConverter(decNumber, base){
    var remStack = new Stack,
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while(decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }
    return baseString;
}