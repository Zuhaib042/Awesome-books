const form = document.getElementById('form');
const booksSection = document.getElementById('books-list');
const bookDetail = document.getElementById('book-detail');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');

const booksArr = [
  {
    title: 'Arabian Nights',
    author: 'R.J Ford',
  },
  {
    title: 'Things Fall Apart',
    author: 'John Paul',
  },
];
function displayBooks() {
  booksArr.forEach((book) => {
    booksSection.innerHTML += `<div class="book-detail" id="book-detail">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <button type="button" onclick=${removeBook()} class="remove-btn" id="remove-btn">Remove</button>
    </div>`;
  });
}
displayBooks();

function addBook() {
  if (inputTitle.value === '' || inputAuthor.value === '') {
    alert('Please input the title and author');
  } else {
    booksArr.push({title: inputTitle.value, author: inputAuthor.value});
  }
}

function removeBook() {
  booksArr.filter((book, index) => {
    console.log(book, index);
  });
}

addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  addBook();
  displayBooks();
});
