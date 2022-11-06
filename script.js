const bookList = document.querySelector(".book-list");
const newBookBtn = document.querySelector("#new-book-btn");
const formInput = document.querySelectorAll(".form-input");
const formSubmit = document.querySelector(".form-submit");
const newBookForm = document.querySelector(".new-book-form");
// const switchBtnList = document.querySelectorAll(".switchBtn");

let myLibrary = [
  { title: "vidal", author: "eric", category: "no category" },
  { title: "blop", author: "royal", category: "no category" },
];

const book = {
  title: "",
  author: "",
  category: "no category",
};

function Book() {
  // the constructor...
  const jdid = Object.create(book);
  jdid.title = formInput[0].value;
  jdid.author = formInput[1].value;
  jdid.page = formInput[2].value;
  return jdid;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function showNewBook(newBook) {
  const card = document.createElement("div");
  card.classList.add("card");

  const removeCard = document.createElement("button");
  removeCard.classList.add("removeCard");
  removeCard.innerText = `X`;

  const switchBtnWrapper = document.createElement("div");
  switchBtnWrapper.classList.add("switchBtnWrapper");

  for (i = 0; i < 3; i++) {
    const switchBtn = document.createElement("input");
    switchBtn.classList.add="switchBtn"
    switchBtn.type = "radio";
    switchBtn.name = `${newBook.title}`;

    //  the id need to have "@" in the middle so i can identifie the input in the switch

    i === 0
      ? ((switchBtn.id = `${newBook.title}@start`), (switchBtn.checked = true))
      : i === 1
      ? (switchBtn.id = `${newBook.title}@reading`)
      : (switchBtn.id = `${newBook.title}@complited`);

      switchBtn.addEventListener("click", function(){
        let a = switchBtn.id.split('@');
        let wrapper = document.querySelector(`#${a[0]}`);
        a[1] === 'reading' ? (wrapper.classList.remove("complited"),wrapper.classList.add("reading")):
        a[1] === 'complited' ? wrapper.classList.add("complited"):
        (wrapper.classList.remove("reading"),wrapper.classList.remove("complited"));
      })

    switchBtnWrapper.appendChild(switchBtn);
  }

  const cardInfoTitle = document.createElement("p");
  const cardInfoAuthor = document.createElement("p");
  const cardInfoPage = document.createElement("p");

  cardInfoTitle.innerText = `Title: ${newBook.title}`;
  cardInfoAuthor.innerText = `Author: ${newBook.author}`;
  cardInfoPage.innerText = `Pages: ${newBook.category}`;

  const cardDetailsWrapper = document.createElement("div");
  cardDetailsWrapper.classList.add("cardDetailsWrapper");

  cardDetailsWrapper.appendChild(cardInfoTitle);
  cardDetailsWrapper.appendChild(cardInfoAuthor);
  cardDetailsWrapper.appendChild(cardInfoPage);

  card.appendChild(removeCard);
  card.appendChild(cardDetailsWrapper);
  card.appendChild(switchBtnWrapper);

  card.id=`${newBook.title}`

  bookList.appendChild(card);
}

function showAllBook() {
  // show all books when page load
  myLibrary.forEach((element) => {
    showNewBook(element);
  });
}

newBookBtn.addEventListener("click", function () {
  newBookForm.classList.toggle("hide");
});

formSubmit.addEventListener("click", function () {
  let e = formInput[0].value;
  let newBook = Book();
  addBookToLibrary(newBook);
  showNewBook(newBook);
});

// switchBtnList.addEventListener("click", function(e){
//   let a = e.id.split('@');
//   let wrapper = document.querySelector(`#${a[0]}`);
//   a[1] === 'reading' ? (wrapper.classList.remove("complited"),wrapper.classList.add("reading")):
//   a[1] === 'complited' ? wrapper.classList.add("complited"):
//   (wrapper.classList.remove("reading"),wrapper.classList.remove("complited"));
// })



showAllBook();
