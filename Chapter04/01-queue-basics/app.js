function Queue() {
    let items = [];

    // Enqueue elements to the queue
    this.enqueue = function(element) {
        items.push(element);
    }

    // Dequeue elements from the queue
    this.dequeue = function() {
        return items.shift();
    }

    // Peeking the element from the front of the queue
    this.front = function() {
        return items[0];
    }

    // Verifying if the queue is empty
    this.isEmpty = function() {
        return items.length == 0;
    }

    // Size of the queue
    this.size = function(){
        return items.length;
    }

    // Printing the elements of the queue
    this.print = function() {
        console.log(items.toString());
    }
}

// Using the queue class
let queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");

queue.enqueue("Camila")

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();


// The queue class using ES6 syntax

let Queue2 = (function(){
    const items = new WeakMap();
    class Queue2 {
        constructor() {
            items.set(this, []);
        }

        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r
        }

        front() {
            return items.get(this)[0];
        }

        print() {
            let q = items.get(this);
            console.log(q.toString());
        }
        printThis() {
            console.log(this);
        }
    }
    return Queue2;
})();

let queue2 = new Queue2();

queue2.enqueue("Jones");
queue2.enqueue("Davey");
queue2.enqueue("Sparrow");

// queue2.print();
// console.log('Front', queue2.front());

queue2.printThis();