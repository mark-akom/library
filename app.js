// simple library project built by Mark Akom Ntow
const booksList = document.querySelector('.books-list');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read-option');

const myLibrary = [];

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = Boolean(Number(read.value));
}

function addBookToLibrary() {
    let newBook = new Book();
    myLibrary.push(newBook);
}

function displayBooks() {
    myLibrary.forEach(book => {
        // create the book div
        const bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'book');

        // create the book heading element
        const bookTitile = document.createElement('h2');
        bookTitile.textContent = `${book.title}`;
        bookDiv.appendChild(bookTitile);

        // create the book author
        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`
        bookDiv.appendChild(author);

        // create the book pages
        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pages);

        // create the read status
        const readStatus = document.createElement('p');
        if(book.read) {
            readStatus.textContent = `Status: Completed`
        } else {
            readStatus.textContent = `Status: Uncompleted`
        }
        bookDiv.appendChild(readStatus);


        // create the buttons for the book

        const btnGroups = document.createElement('div');
        btnGroups.setAttribute('class', 'btn-group')

        // the remove button
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'delete');
        removeBtn.textContent = 'Remove';
        btnGroups.appendChild(removeBtn);

        // the read button
        const readBtn = document.createElement('button');
        readBtn.setAttribute('class', 'read-toggle');
        if (book.read) {
            readBtn.textContent = 'Unread';
        } else {
            readBtn.textContent = 'Read';
        }
        btnGroups.appendChild(readBtn);

        // add the buttons to the book
        bookDiv.appendChild(btnGroups);

        // add the book to the book list

        booksList.appendChild(bookDiv);
    })
}

function handleSubmit(e) {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
}


// events listeners

form.addEventListener('submit', handleSubmit);


displayBooks();