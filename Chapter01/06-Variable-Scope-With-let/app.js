let movie = 'Lord of the Rings';
// var movie = 'Batman v Superman'; // throws error, variable movie already declared

function starWarsFan() {
    let movie = 'Star Wars';
    return movie;
}

function marvelFan() {
    movie = 'The Avengers';
    return movie;
}

function blizzardFan() {
    let isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);
    if(isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!';
    console.log('After if: ' + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();



