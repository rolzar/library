let myLibrary = [];

const createBook = document.getElementById('add');
createBook.addEventListener('mousedown', form);

function form(){
    console.log("hello")
}



function Book(name, author,pages){
    this.name = name;
    this.author = author;
    this.pages = pages;

}

function addBookToLibrary(object){
    myLibrary.push(object)

}

const book1 = new Book('one Piece', 'Oda',1000);

addBookToLibrary(book1);

