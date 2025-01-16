class Book {
    constructor (name, author, year) {
        this.name = name,
        this.author = author,
        this.year = year
    }

    createBookElem = () => {
        const bookElem = document.createElement('div');
        bookElem.setAttribute('id', this.name);
        bookElem.classList.add('book-elem');
    
        const imgSpace = document.createElement('div');
        imgSpace.classList.add('img-container');
    
        const bottomBar = document.createElement('div');
        bottomBar.classList.add('bottom-bar');
    
        const bookNameDisp = document.createElement('div');
        bookNameDisp.classList.add('book-name-display');
        bookNameDisp.textContent = this.name;
    
        const bookAuthorDisp = document.createElement('div');
        bookAuthorDisp.classList.add('book-author-display');
        bookAuthorDisp.textContent = this.author;
    
        const bookYearDisp = document.createElement('div');
        bookYearDisp.classList.add('book-year-display');
        bookYearDisp.textContent = this.year;

        bookElem.appendChild(imgSpace);
        bookElem.appendChild(bottomBar);
        bottomBar.appendChild(bookNameDisp);
        bottomBar.appendChild(bookAuthorDisp);
        bottomBar.appendChild(bookYearDisp);

        return bookElem;
    }
}

const library = document.getElementById('library');

const bookLibrary = [];

const displayLibrary = () => {
    //Looping over books
    bookLibrary.map((book) => {
        library.appendChild(book.createBookElem());
    });
}

const addBookToLibrary = () => {
    
}

let lotr = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1950);
let reaperMan = new Book('Reaper Man', 'Terry Pratchett', 1991);

bookLibrary.push(lotr, reaperMan);

displayLibrary();