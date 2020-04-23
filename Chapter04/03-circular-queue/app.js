let Queue = (function(){
    const items = new WeakMap();
    class Queue {
        constructor() {
            items.set(this, [])
        }

        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }

        front() {
            return items.get(this)[0];
        }

        size() {
            return (items.get(this)).length;
        }

        print() {
            let q = items.get(this);
            console.log(q.toString());
        }
    }
    return Queue;
})();

function hotPotato(nameList, num){
    let queue = new Queue(); // {1}

    for(let i=0; i<nameList.length; i++){
        queue.enqueue(nameList[i]); // {2}
    }

    let eliminated = '';
    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue()); // {3}
        }
        eliminated = queue.dequeue(); // {4}
        console.log(`${eliminated} was eliminated from the Hot Potato game.`)
    }
    return queue.dequeue(); // {5}
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log(`The winner is: ${winner}`);