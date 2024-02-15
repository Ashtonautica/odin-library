const myLibrary = [];
const tbody = document.querySelector("tbody");

function Book(title) {
    this.title = title;
};

function addBookToLibrary(title) {
    myLibrary.push(new Book(title));
};

function clearTable() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.lastChild);
    };
};

function displayBooks() {
    clearTable();
    myLibrary.forEach(book => {
        const tr = document.createElement("tr");
        const title = document.createElement("td");
        title.textContent = book.title;
        tr.appendChild(title);
        tbody.appendChild(tr);
    });
};

addBookToLibrary("The Hobbit");
addBookToLibrary("Treasure Island");
displayBooks();