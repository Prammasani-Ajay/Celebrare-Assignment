const maintag = document.querySelector("main")
const newForm = document.querySelector(".form1");
const selectedFontName = document.querySelector("#fontsSelected");
const colorName = document.querySelector("#selectedColor");
const sizeOfFont = document.querySelector("#fontSize");
const submitButton = document.querySelector("#submitbtn");
const AddTextButton = document.querySelector("#AddTextOpt");
const addTextField = document.querySelector(".addTextField");
const newTextSection = document.querySelector(".newTextSection");
const submitNewTextButton = document.querySelector(".submitNewTextBtn");

var textContent;
let textsCount = 2;


let applyStyle = (fontFamily, fontSize, textColor) => {

    if(fontFamily === ""){
        alert("Invalid ! Input")
    }
    if (fontSize === "" || fontSize < 1) {
        fontSize = 16;
    }
    if (textColor === "") {
        textColor = "black";
    }

    for (let count = 0; count < textsCount; count++) {
        textContent = document.querySelectorAll(".textContent")[count];

        textContent.addEventListener("click", () => {
            newForm.showModal()
            textContent.setAttribute("data-clicked", "true");
        })
        textContent.setAttribute("style", `font-family: ${fontFamily};font-size: ${fontSize}px;color:${textColor}`)

    };

};
applyStyle()

//to apply changes using form data and applying it using class names.
newForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

submitButton.addEventListener("click", () => {
    newForm.close();
    var selectedFontOption = selectedFontName.options[selectedFontName.selectedIndex].value;
    var inputFontSize = sizeOfFont.value;
    var selectedTextColor = colorName.options[colorName.selectedIndex].value
    // console.log(selectedFontOption);
    // console.log(inputFontSize);
    // console.log(selectedTextColor);
    applyStyle(selectedFontOption, inputFontSize, selectedTextColor)
})

//adding new text and appending it to main tag.
function creatingNewTextSection(newText) {
    if (newText === "") {
        alert("Invalid ! Text")
    } else {
        const textStorage = document.createElement("p");
        textStorage.setAttribute("class", "textContent movingText")
        textStorage.textContent = newText;
        maintag.appendChild(textStorage);
        textsCount++
        applyStyle()
    }

}

AddTextButton.addEventListener("click", () => {
    newForm.close();
    addTextField.showModal();
})

addTextField.addEventListener("submit", (event) => {
    event.preventDefault();
})

submitNewTextButton.addEventListener("click", () => {
    addTextField.close();
    var textArea = newTextSection.value;
    // console.log(textArea)
    creatingNewTextSection(textArea)
})

//To move the text from one place to other
document.addEventListener("DOMContentLoaded", function () {
    makeTextMovable();
  });
  
  function makeTextMovable() {
    var movingText = document.querySelector(".movingText");
  
    document.addEventListener("click", function (event) {
      // Get the coordinates of the mouse click
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      // Move the text to the clicked position
      movingText.style.left = mouseX + "px";
      movingText.style.top = mouseY + "px";
    });
  }