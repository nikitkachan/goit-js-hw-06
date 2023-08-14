function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

function onClick() {
  colorText.textContent = getRandomHexColor();
  body.style.backgroundColor = colorText.textContent;
}

changeBtn.addEventListener("click", onClick);