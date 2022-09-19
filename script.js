const booksSection = document.getElementById('books-list');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');

let booksArr = [];

function displayBooks() {
  if (localStorage.getItem('coward') === null) {
    booksArr = [];
  } else {
    booksArr = JSON.parse(localStorage.getItem('coward'));
  }

  booksArr.forEach((book, i) => {
    booksSection.innerHTML += `<div class="book-detail" id="book-detail">
        <p class="book-title">${book.title}</p> 
        <p class="book-author">${book.author}</p> 
        <button type="button" onclick="removeBook(${i})" class="remove-btn" id="remove-btn">Remove</button><hr>
    </div>`;
  });
}
window.onload = displayBooks();

function addBook() {
  if (inputTitle.value !== '' || inputAuthor.value !== '') {
    booksArr.push({ title: inputTitle.value, author: inputAuthor.value });
    localStorage.setItem('coward', JSON.stringify(booksArr));
  }
}
/* eslint-disable no-unused-vars */
function removeBook(index) {
  booksArr.splice(index, 1);
  booksSection.innerHTML = '';
  localStorage.setItem('coward', JSON.stringify(booksArr));
  displayBooks();
}

addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  addBook();
  displayBooks();
  inputTitle.value = '';
  inputAuthor.value = '';
});
