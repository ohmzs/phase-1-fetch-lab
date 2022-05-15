// access the fetch() request you will create inside fetchBooks(). //write your solution so that fetchBooks() returns the fetch(). 
// document.addEventListener('DOMContentLoaded', function fetchBooks () {
//   
//    .then(books => {
//           fetchBooks(books);
//    });
//    });




   function fetchBooks(){
    return fetch('https://anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(books => {
          renderBooks(books)
          console.log(books)
        })
   }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
   
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
};
document.addEventListener('DOMContentLoaded', function(){
  fetchBooks();
});