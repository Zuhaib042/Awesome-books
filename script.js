const form = document.getElementById('form');
const booksSection = document.getElementById('books-list');
const bookDetail = document.getElementById('book-detail');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');

let booksArr = [];
//   {
//     title: 'Arabian Nights',
//     author: 'R.J Ford',
//   },
//   {
//     title: 'Things Fall Apart',
//     author: 'John Paul',
//   },
// ];
function displayBooks() {
  if(localStorage.getItem('coward') === null) {
    booksArr=[];
  }else{
    booksArr=JSON.parse(localStorage.getItem('coward'));
  }
  
  booksArr.forEach((book,i) => {
    
    booksSection.innerHTML += `<div class="book-detail" id="book-detail"> <h1>${i}</h1>
        <p class="book-title">${book.title}</p> 
        <p class="book-author">${book.author}</p> 
        <button type="button" onclick=" removeBook(${i})" class="remove-btn" id="remove-btn">Remove</button><hr>
    </div>`;
    
  });
}
displayBooks();

function addBook() {
  if (inputTitle.value === '' || inputAuthor.value === '') {
    alert('Please input the title and author');
  } else {
    
   booksArr.push({title: inputTitle.value, author: inputAuthor.value});
    
  
     localStorage.setItem("coward", JSON.stringify(booksArr));
   
  }
}

function removeBook(index) {
 booksArr.splice(index,1);
 booksSection.innerHTML = '';
  localStorage.setItem("coward", JSON.stringify(booksArr));
   displayBooks();
}

addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  addBook();
  displayBooks();
});
