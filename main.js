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

        const dataBar = document.createElement('div');
        dataBar.classList.add('data-bar');
    
        const bookNameDisp = document.createElement('div');
        bookNameDisp.classList.add('book-name-display');
        bookNameDisp.textContent = this.name;
    
        const bookAuthorDisp = document.createElement('div');
        bookAuthorDisp.classList.add('book-author-display');
        bookAuthorDisp.textContent = this.author;
    
        const bookYearDisp = document.createElement('div');
        bookYearDisp.classList.add('book-year-display');
        bookYearDisp.textContent = this.year;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete', 'btn-normal');
        btnDelete.textContent = 'Del';
        btnDelete.addEventListener("click", () => {
            library.removeChild(bookElem)
            bookLibrary = bookLibrary.filter(item => item.name != this.name);
            emptyLibrary();
        })

        const readDisp = document.createElement('div');
        readDisp.classList.add('unread', 'status-elem');
        readDisp.textContent = 'Unread'

        const statusDisp = document.createElement('div');
        statusDisp.classList.add('status-disp');
        
        statusDisp.addEventListener('click', () => {
            if (readDisp.classList.contains('unread')) {
                readDisp.classList.remove('unread');
                readDisp.classList.add('read');
                readDisp.textContent = 'Read';
                return
            }

            readDisp.classList.remove('read');
            readDisp.classList.add('unread');
            readDisp.textContent = 'Unread'
        })

        bookElem.appendChild(imgSpace);
        bookElem.appendChild(bottomBar);
        statusDisp.appendChild(btnDelete);
        statusDisp.appendChild(readDisp);
        bottomBar.appendChild(dataBar);
        bottomBar.appendChild(statusDisp)
        dataBar.appendChild(bookNameDisp);
        dataBar.appendChild(bookAuthorDisp);
        dataBar.appendChild(bookYearDisp);

        emptyLibrary();

        return bookElem;
    }
}

const library = document.getElementById('library');
const btnAddBook = document.getElementById('btn-add-book');
const dialogAddBook = document.getElementById('dialog-add-book');
const btnDialogClose = document.getElementById('btn-dialog-close');

const formAddBook = document.getElementById('form-add-book');
const addBookName = document.getElementById('add-book-name');
const addBookAuthor = document.getElementById('add-book-author');
const addBookYear = document.getElementById('add-book-year');
const addBookSubmit = document.getElementById('add-book-submit');

const emptyFieldsDiv = document.getElementById('empty-fields');
const emptyLibraryDiv = document.getElementById('empty-library')

btnAddBook.addEventListener("click", () => {
    dialogAddBook.show();
})

btnDialogClose.addEventListener("click", () => {
    dialogAddBook.close();
    console.log('Clicked')
})

let bookLibrary = [];

const displayLibrary = () => {
    //Looping over books
    bookLibrary.map((book) => {
        library.appendChild(book.createBookElem());
    });
}

formAddBook.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = addBookName.value;
    const author = addBookAuthor.value;
    const year = addBookYear.value;

    if (name === '' || author === '' || year === '') {
        return emptyFields();
    }

    while (library.firstChild) {
        library.removeChild(library.firstChild)
    }

    emptyFieldsDiv.textContent = '';

    const newBook = new Book(name, author, year);
    bookLibrary.push(newBook);

    displayLibrary();
})

const emptyFields = () => {
    emptyFieldsDiv.textContent = 'Fill out your respective fields';
}

const emptyLibrary = () => {
    if (bookLibrary.length === 0) {
        return emptyLibraryDiv.textContent = 'The Library is empty! Click the Add Book button to add a book';
    }

    emptyLibraryDiv.textContent = '';
}

let lotr = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1950);
let reaperMan = new Book('Reaper Man', 'Terry Pratchett', 1991);

bookLibrary.push(lotr, reaperMan);

displayLibrary();
emptyLibrary();