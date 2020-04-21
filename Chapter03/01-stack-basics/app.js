// Creating a stack
function Stack() {
    let items = [];

    // Pushing elements to the stack
    this.push = function(element) {
        items.push(element);
    }

    // Popping elements from the stack
    this.pop = function() {
        return items.pop();
    }

    // Peeking the element from the top of the stack
    this.peek = function() {
        return items[items.length-1];
    }

    // Verifying if the stack is empty
    this.isEmpty = function() {
        return items.length == 0
    }

    // Get the length of the array
    this.size = function() {
        return items.length;
    }

    // Clearing and printing the elements of the stack
    this.clear = function() {
        items = [];
    }

    // Print helper method
    this.print = function() {
        console.log(items.toString());
    }
}

// Using the Stack class
let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());
stack.print();