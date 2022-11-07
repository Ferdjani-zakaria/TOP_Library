const bookList = document.querySelector(".book-list");
const newBookBtn = document.querySelector("#new-book-btn");
const formInput = document.querySelectorAll(".form-input");
const formSubmit = document.querySelector(".form-submit");
const newBookForm = document.querySelector(".new-book-form");


let myLibrary = [
  { title: "The first law", author: "Joe Abercrombie", category: "Fiction" },
  { title: "I am Legend", author: "Richard Matheson", category: "Fiction" },
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
  // add a new book to the library array
  myLibrary.push(book);
}

// Main function, create a card and all the element in it

function showNewBook(newBook) {
  const card = document.createElement("div");
  card.classList.add("card");

  const removeCard = document.createElement("button");
  removeCard.classList.add("removeCard");
  removeCard.innerText = `X`;

  const cardStatus = document.createElement("p");
  cardStatus.classList.add("cardStatus");

  const switchBtnWrapper = document.createElement("div");
  switchBtnWrapper.classList.add("switchBtnWrapper");

  for (i = 0; i < 3; i++) {
    const switchBtn = document.createElement("input");
    switchBtn.classList.add = "switchBtn";
    switchBtn.type = "radio";
    switchBtn.name = `${newBook.title.replace(/\s+/g, '')}`;

    //  the id need to have "@" in the middle so i can identifie the input in the radio input to change color of card bg

    i === 0
      ? ((switchBtn.id = `${newBook.title.replace(/\s+/g, '')}@start`), (switchBtn.checked = true))
      : i === 1
      ? (switchBtn.id = `${newBook.title.replace(/\s+/g, '')}@reading`)
      : (switchBtn.id = `${newBook.title.replace(/\s+/g, '')}@complited`);

    switchBtn.addEventListener("click", function () {
      let a = switchBtn.id.split("@");
      let wrapper = document.querySelector(`#${a[0]}`);
      a[1] === "reading"
        ? (wrapper.classList.remove("complited"),
          cardStatus.innerText = `Reading`,
          wrapper.classList.add("reading"))
        : a[1] === "complited"
        ? (wrapper.classList.add("complited"),
          cardStatus.innerText = `Complited`)
        : (wrapper.classList.remove("reading"),
          wrapper.classList.remove("complited"),
          cardStatus.innerText = ``);
    });

    switchBtnWrapper.appendChild(switchBtn);
  }

  const cardInfoTitle = document.createElement("p");
  const cardInfoAuthor = document.createElement("p");
  const cardInfoPage = document.createElement("p");

  cardInfoTitle.innerText = `Title: ${newBook.title}`;
  cardInfoAuthor.innerText = `Author: ${newBook.author}`;
  cardInfoPage.innerText = `Category: ${newBook.category}`;

  const cardDetailsWrapper = document.createElement("div");
  cardDetailsWrapper.classList.add("cardDetailsWrapper");

  cardDetailsWrapper.appendChild(cardInfoTitle);
  cardDetailsWrapper.appendChild(cardInfoAuthor);
  cardDetailsWrapper.appendChild(cardInfoPage);

  card.appendChild(removeCard);
  card.appendChild(cardDetailsWrapper);
  card.appendChild(switchBtnWrapper);
  

  const cardTitle = document.createElement("p");
  cardTitle.innerText = `${newBook.title}`;
  cardTitle.classList.add("cardTitle");

  card.appendChild(cardTitle);
  card.appendChild(cardStatus);

  card.id = `${newBook.title.replace(/\s+/g, '')}`;



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

formSubmit.addEventListener("click", function (event) {
  event.preventDefault()
  let e = formInput[0].value;
  let newBook = Book();
  addBookToLibrary(newBook);
  showNewBook(newBook);
});


showAllBook();
