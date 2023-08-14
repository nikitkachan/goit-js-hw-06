function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");
const randomColor = getRandomHexColor();

function onClick() {
  const randomColor = getRandomHexColor();
  colorText.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

changeBtn.addEventListener("click", onClick);