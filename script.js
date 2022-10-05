let myLibrary = [];

const createBook = document.getElementById('add');
createBook.addEventListener('mousedown', form);
const close = document.getElementById("close");
close.addEventListener('mousedown', () => {
    document.getElementById('bookForm').style.visibility = "hidden";

})

function form(){
    document.getElementById("form").reset();
    document.getElementById('bookForm').style.visibility = "visible";

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


// Form 

