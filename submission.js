class Book {
    constructor(_name, _genre, _goodReadScore) {
         this._name = _name;
         this._genre = _genre;
         this._goodReadScore = _goodReadScore;
    }

}

let harry = new Book("Harry potter", "Adventure", 5.5)


console.log(`The first book is ${harry._name}, it is an ${harry._genre} that scored ${harry._goodReadScore} on good read.`);