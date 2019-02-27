var _jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];

class Jokes {
    constructor(jokes) {
        this.jokes = jokes
    }
    getRandomJoke() {
        var joke = _jokes[Math.floor(Math.random()*_jokes.length)];
        return joke
    }
    getAllJokes() {
        return _jokes
    }
    addJoke(newJoke) {
        _jokes.push(newJoke)
    } 
}

/* 
* This is Simply a blog to test the methods *
let testJoke = new Jokes
console.log("getRandomJoke:",testJoke.getRandomJoke())
console.log("getAllJokes:",testJoke.getAllJokes())
console.log("addJoke:",testJoke.addJoke("Test"))
console.log(_jokes)

*/

module.exports = new Jokes();
