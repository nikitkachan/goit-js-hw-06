function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

function onClick (event) {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

changeBtn.addEventListener("click", onClick);