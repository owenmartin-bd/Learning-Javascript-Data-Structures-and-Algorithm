function Set() {
    let items = {};

    // The has (value) method
    this.has = function(value) {
        // return value in items;
        return items.hasOwnProperty(value); // better approach than the previous code
    }

    // the add method
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value; // {1}
            return true;
        }
        return false;
    }

    // the delete and clear methods
    this.delete = function(value) {
        if(this.has(value)){
            delete items[value]; //{2}
            return true;
        }
        return false;
    }

    this.clear = function() {
        items = {};
    }

    // The size method
    this.size = function() { // Only supports mordern browsers
        return Object.keys(items).length; // {4}
    }

    this.sizeLegacy = function() {
        let count = 0;
        for(let key in items){ // {5}
            if(items.hasOwnProperty(key)) { // {6} 
                ++count; // {7}
            }
            return count;
        }
    }

    // The values method
    this.values = function() {
        let values = [];
        for(let i=0, keys=Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }

    this.valuesLegacy = function() {
        let values = [];
        for(let key in items) { //{7}
            if(items.hasOwnProperty(key)) { // {8}
                values.push(items[key])
            }
        }
        return values;
    }

    this.union = function(otherSet) {
        let unionSet = new Set(); // {1}

        let values = this.values(); // {2}
        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values(); // {3}
        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    this.intersection = function(otherSet){
        let intersectionSet = new Set();

        let values = this.values;
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
}

let set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());