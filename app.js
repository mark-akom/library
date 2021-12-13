// simple library project built by Mark Akom Ntow
const booksList = document.querySelector('.books-list');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read-option');
const addBookBtn = document.querySelector('.new-book');

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeReadStatus() {
        this.read = !(this.read);
    }
}

function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, Number(pages.value), Boolean(Number(read.value)));
    myLibrary.push(newBook);
}

function createBook(bookObj, index) {
   return `<div class="book"><h2>${bookObj.title}</h2><p>Author: ${bookObj.author}</p><p>Pages: ${bookObj.pages}</p><p>Status: ${(bookObj.read) ? 'Completed' : 'Uncompleted'}</p><div class="btn-group"><button class="delete"  data-index="${index}">Remove</button><button class="read-toggle" data-index="${index}">${(bookObj.read) ? 'Unread' : 'Read'}</button></div></div>`
}

function displayBooks() {
    let htmlBooks = '';
    myLibrary.forEach((book, index) => {
        const createdBook = createBook(book, index);
        htmlBooks += createdBook;
    });
    booksList.innerHTML = htmlBooks;
}

function handleSubmit(e) {
    e.preventDefault();
    if (title.value.trim() === '' && author.value.trim() === '' && pages.value.trim() === '') {
        alert('Please fill all fields');
        return;
    }
    addBookToLibrary();
    displayBooks();
    clearForm();
}


function handleButtonClick(e) {
    const elm = e.target;
    if (elm.tagName === 'BUTTON' && elm.textContent === 'Remove') {
        const index = Number(elm.getAttribute('data-index'));
        myLibrary.splice(index, 1);
        displayBooks();
    }
    if (elm.tagName === 'BUTTON' && elm.getAttribute('class') === 'read-toggle') {
        const elmIndex = elm.getAttribute('data-index');
        myLibrary[elmIndex].changeReadStatus();
        displayBooks();
    }
}

function clearForm() {
    author.value = '';
    title.value = '';
    pages.value = '';
    read.value = '1';
}

// events listeners

addBookBtn.addEventListener('click', (e) => {
    form.classList.toggle('show-form');
})

booksList.addEventListener('click', handleButtonClick)

form.addEventListener('submit', handleSubmit);


displayBooks();