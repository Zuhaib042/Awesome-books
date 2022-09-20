const booksSection = document.getElementById('books-list');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = JSON.parse(localStorage.getItem('coward')) || [];
console.log(booksList);
// let booksArr = [];

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // displaybooks
  displayBooks() {
    // let booksArr = [];

    // if (localStorage.getItem('coward') === null) {
    //   booksArr = [];
    // } else {
    //   booksArr = JSON.parse(localStorage.getItem('coward'));
    // }

    booksList.forEach((book, i) => {
      booksSection.innerHTML += `<div class="book-detail" id="book-detail">
      <div class="one-book">
          <span class="book-title">"${book.title}"</span>
          <span>by</span>
          <span class="book-author">${book.author}</span>
      </div>
          <button type="button" onclick="addMethod.removeBook(${i})" class="remove-btn" id="remove-btn">Remove</button>
      </div>`;
    });
  }

  // addbook
  addBook() {
    // let booksArr = [];
    let book = new Books(inputTitle.value, inputAuthor.value);
    if (inputTitle.value !== '' && inputAuthor.value !== '') {
      booksList.push(book);
      localStorage.setItem('coward', JSON.stringify(booksList));
    }
  }
  // removebook
  removeBook(index) {
    booksList.splice(index, 1);
    booksSection.innerHTML = '';
    localStorage.setItem('coward', JSON.stringify(booksList));
    this.displayBooks();
  }
}

// function displayBooks() {
//   if (localStorage.getItem('coward') === null) {
//     booksArr = [];
//   } else {
//     booksArr = JSON.parse(localStorage.getItem('coward'));
//   }

//   booksArr.forEach((book, i) => {
//     booksSection.innerHTML += `<div class="book-detail" id="book-detail">
//         <p class="book-title">${book.title}</p>
//         <p class="book-author">${book.author}</p>
//         <button type="button" onclick="removeBook(${i})" class="remove-btn" id="remove-btn">Remove</button><hr>
//     </div>`;
//   });
// }
// window.onload = displayBooks();

// function addBook() {
//   if (inputTitle.value !== '' || inputAuthor.value !== '') {
//     booksArr.push({ title: inputTitle.value, author: inputAuthor.value });
//     localStorage.setItem('coward', JSON.stringify(booksArr));
//   }
// }
// /* eslint-disable no-unused-vars */
// function removeBook(index) {
//   booksArr.splice(index, 1);
//   booksSection.innerHTML = '';
//   localStorage.setItem('coward', JSON.stringify(booksArr));
//   displayBooks();
// }

let addMethod = new Books();

window.onload = addMethod.displayBooks();
addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  addMethod.addBook();
  addMethod.displayBooks();
  inputTitle.value = '';
  inputAuthor.value = '';
});
