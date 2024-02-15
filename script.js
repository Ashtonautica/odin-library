const myLibrary = [];
const tbody = document.querySelector("tbody");
const formButton = document.querySelector("form button");
const form = document.querySelector("form");

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
                let readButton = document.createElement("button");
                readButton.setAttribute("type", "button");
                readButton.setAttribute("data-index", index);
                readButton.textContent = value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
                readButton.addEventListener("click", () => {
                    myLibrary[index].read = !(myLibrary[index].read);
                    displayBooks();
                });
                entry.appendChild(readButton);
            } else {
                entry.textContent = value;
            }
            tr.appendChild(entry);
        };

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("data-index", index);
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks();
        })
        deleteCell.appendChild(deleteButton);
        tr.appendChild(deleteCell);

        tbody.appendChild(tr);
    });
};

formButton.addEventListener("click", e => {
    e.preventDefault();
    let readStatus;
    if (form.read.value === "true") {
        readStatus = true;
    } else {
        readStatus = false;
    }
    addBookToLibrary(form.title.value, form.author.value, form.pages.value, readStatus);
    displayBooks();
});