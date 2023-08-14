const input = document.getElementById("font-size-control");

const text = document.getElementById("text");

input.addEventListener("input", onChange);

function onChange () {
    text.style.fontSize = `${input.value}px`;
}
onChange()