const myLibrary = [];
const tbody = document.querySelector("tbody");
const formButton = document.querySelector("form button");
const form = document.querySelector("form");
const deleteButtons = document.querySelectorAll("td button");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
};

function clearTable() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.lastChild);
    };
};

function displayBooks() {
    clearTable();
    myLibrary.forEach((book, index) => {
        const tr = document.createElement("tr");
        for (const value of Object.values(book)) {
            const entry = document.createElement("td");
            if (value === true || value === false) {
                entry.textContent = value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
            } else {
                entry.textContent = value;
            }
            tr.appendChild(entry);
        }
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("data-index", index);
        deleteButton.textContent = "X";
        deleteCell.appendChild(deleteButton);
        tr.appendChild(deleteCell);
        tbody.appendChild(tr);
    })
};

formButton.addEventListener("click", e => {
    e.preventDefault();
    addBookToLibrary(form.title.value, form.author.value, form.pages.value, Boolean(form.read.value));
    displayBooks();
})

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, true);
addBookToLibrary("Treasure Island", "Robert Louis Stevenson", 209, false);
displayBooks();