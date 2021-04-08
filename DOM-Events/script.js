var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLengh() {
    return input.value.length;
}

function addListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addAfterClick() {
    if (inputLengh() > 0) {
        addListItem();
    }
}

function addAfterKeypress(event) {
    if (inputLengh() > 0 && event.keyCode === 13) {
        addListItem();
    }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterKeypress);