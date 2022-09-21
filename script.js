const booksSection = document.getElementById('books-list');
const timeDate = document.getElementById('date');
const sectionOfBooks = document.querySelector('#books-section');
const sectionContact = document.querySelector('#section-contact');
const sectionForm = document.querySelector('#form-section');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const errorMesg = document.querySelector('.error-mesg');
const links = document.querySelectorAll('.nav-links');
const booksList = JSON.parse(localStorage.getItem('coward')) || [];
console.log(sectionOfBooks);
console.log(sectionContact);
console.log(sectionForm);

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // displaybooks
  static displayBooks() {
    Books.timeDisplay()
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

  //Display Date and Time
  static timeDisplay () {
     let date = new Date();
     let n = date.toDateString();
     let time = date.toLocaleTimeString();
         timeDate.innerText =  n + '  ' + time ;
  }
}

window.onload = Books.displayBooks();
setInterval(Books.timeDisplay,1000);
addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  Books.addBook();
    inputTitle.value = '';
  inputAuthor.value = '';
});

// navigation

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log(e.target.id);
    if (e.target.id === 'list') {
      sectionOfBooks.classList.add('showing');
      sectionContact.classList.remove('showing');
      sectionForm.classList.remove('showing');
    } else if (e.target.id === 'add') {
      sectionOfBooks.classList.remove('showing');
      sectionContact.classList.remove('showing');
      sectionForm.classList.add('showing');
    } else if (e.target.id === 'contact') {
      sectionOfBooks.classList.remove('showing');
      sectionContact.classList.add('showing');
      sectionForm.classList.remove('showing');
    }
  });
});
