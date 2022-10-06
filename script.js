let myLibrary = [];
let bookCount = 0;
const form = document.getElementById("form");

// Form 
const createBook = document.getElementById('add');
createBook.addEventListener('mousedown', formContainer);

const close = document.getElementById("close");
close.addEventListener('mousedown', formClose)

function formContainer(){
    form.reset();
    document.getElementById('bookForm').style.visibility = "visible";
}

function formClose(){
    document.getElementById('bookForm').style.visibility = "hidden";
}




// Create Book

function formData(){
    const data = new FormData(form);
    let order = [];

    for (const value of data.values()) {
        order.push(value)
    }
    if(!(order.includes('on',3))){
        order.push('not read')
    };
    
    addBookToLibrary(order);
    bookCount++;

}


function Book(name, author,pages,read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(object){
    formClose();
    const book = new Book(object[0],object[1],object[2],object[3]);
    myLibrary.push(book)
    bookPage();

}

function bookPage(){
    myLibrary.forEach(book => {
        console.log('object');
    })


}


