function LinkedList() {
    let Node = function(element) { // {1}
        this.element = element;
        this.next = null;
    }

    let length = 0; // {2}
    let head = null; // {3}

    this.append = function(element){
        let node = new Node(element), // {1}
        current; // {2}

        if(head === null) { // {3}
            head = node;
        } else {
            current = head; // {4}
            // loop the list until find last item
            while(current.next) {
                current = current.next
            }

            // get last item and assign next to node to make the link
            current.next = node;
        }
        length++;
    };
    
    this.insert = function(position, element){
        // check for out-of-bounds values
        if(position >= 0 && position <= length) { // {1}
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if(position === 0) { // add on first position
                node.next = current; // {2}
                head = node;
            } else {
                while(index++ < position) { // {3}
                    previous = current;
                    current = current.next;
                }
                node.next = current; // {4}
                previous.next = node; // {5}
            }
            length++;
            return true;
        } else {
            return false; // {6}
        }
    };
    
    this.removeAt = function(position){
        // check for oout-of-bounds values
        if(position > -1 && position < length){ // {1}
            let current = head, // {2}
            previous, // {3}
            index = 0; // {4}

            //removing first item
            if(position === 0){ // {5}
                head = current.next;
            } else {
                while(index++ < position) { // {6}
                    previous = current; // {7}
                    current = current.next // {8}
                }
                // link previuos with current's next: skip it to remove
                previous.next = current.next; //{9}
            }
            length--; // {10}
            return current.element;
        } else {
            return null; // {11}
        }
    };

    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index)
    };

    this.indexOf = function(element){
        let current = head,
        index = -1;

        while(current) { // {2}
            if(element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function(){
        return length === 0;
    };

    this.size = function(){
        return length;
    };

    this.getHead = function() {
        return head;
    }

    this.toString = function(){
        let current = head, // {1}
        string = ''; // {2}

        while(current) {
            string += current.element + (current.next ? 'n' : ''); //{4}
            current = current.next; // {5}
        }
        return string;
    };

    this.print = function(){};
}

let list = new LinkedList();
list.append(15);
list.append(10);