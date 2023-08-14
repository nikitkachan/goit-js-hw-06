const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const onInputChange = (event) => {
    nameOutput.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    }
}

nameInput.addEventListener("input", onInputChange);