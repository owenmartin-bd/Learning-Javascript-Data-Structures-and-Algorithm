function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('title', 'page', 'isbn');

console.log(book);