let titleElem = document.getElementById("title")
let authorElem= document.getElementById("author")
let yearElem = document.getElementById("year")
let btnElem = document.getElementById("btn")
let tbodyElem = document.getElementById("book-list")

let localList = JSON.parse(localStorage.getItem("book list")) || [];

window.onload = function() {
    localList.forEach(task => addListItem(task.title, task.author, task.year));
};

function addListItem(title,author,year) {

    let trValue = document.createElement("tr")
    let titleValue = document.createElement("th")
    let authorValue = document.createElement("th")
    let yearValue = document.createElement("th")

    titleValue.textContent = title
    authorValue.textContent = author
    yearValue.textContent = year

    trValue.append(titleValue)
    trValue.append(authorValue)
    trValue.append(yearValue)
    tbodyElem.append(trValue)
}

function addBook() {

    let title = titleElem.value
    let author = authorElem.value
    let year = yearElem.value

    if (title === "" || author === "" || year === "") {
        alert("Please fill all fields.");
        return;
    }

    addListItem(title,author,year)

    localList.push({ title, author, year });
    localStorage.setItem("book list", JSON.stringify(localList));

    titleElem.value = "";
    authorElem.value = "";
    yearElem.value = "";
    titleElem.focus();

}

btnElem.addEventListener("click",addBook)
