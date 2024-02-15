const myLibrary = [];

function Book(title) {
    this.title = title;
};

function addBookToLibrary(title) {
    myLibrary.push(new Book(title));
};