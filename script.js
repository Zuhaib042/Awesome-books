const booksSection = document.getElementById('books-list');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const errorMesg = document.querySelector('.error-mesg');
const booksList = JSON.parse(localStorage.getItem('coward')) || [];

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // displaybooks
  static displayBooks() {
    booksList.forEach((book, i) => {
      booksSection.innerHTML += `<div class="book-detail" id="book-detail">
      <div class="one-book">
          <span class="book-title">"${book.title}"</span>
          <span>by</span>
          <span class="book-author">${book.author}</span>
      </div>
          <button type="button" onclick="Books.removeBook(${i})" class="remove-btn" id="remove-btn">Remove</button>
      </div>`;
    });
  }

  // addbook
  static addBook() {
    const book = new Books(inputTitle.value, inputAuthor.value);
    if (inputTitle.value !== '' && inputAuthor.value !== '') {
      booksList.push(book);
      localStorage.setItem('coward', JSON.stringify(booksList));
      errorMesg.classList.remove('active');
    } else {
      errorMesg.classList.add('active');
    }
  }
  // removebook

  static removeBook(index) {
    booksList.splice(index, 1);
    booksSection.innerHTML = '';
    localStorage.setItem('coward', JSON.stringify(booksList));
    Books.displayBooks();
  }
}

window.onload = Books.displayBooks();
addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  Books.addBook();
  Books.displayBooks();
  inputTitle.value = '';
  inputAuthor.value = '';
});
