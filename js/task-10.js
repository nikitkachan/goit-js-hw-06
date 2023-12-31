function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.children[0];
const create = controls.children[1];
const destroy = controls.children[2];
const boxes = document.getElementById("boxes")
const min = parseInt(input.min);
const max = parseInt(input.max);
const step = parseInt(input.step);

create.addEventListener("click", onCreateBoxes)
destroy.addEventListener("click", destroyBoxes)

function createBoxes(amount) {
  const newBoxes = [];
  if (amount<min || amount>max) {
    alert(`Введите число от ${min} до ${max}.`)
  } else {
for (let i = 0; i < amount; i += step) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px `;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    newBoxes.push(div);
  }
  return newBoxes;
  }
}

function onCreateBoxes() {
  boxes.append(...createBoxes(input.value));
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
