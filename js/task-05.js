const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const onInputChange = (event) => {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous";
    }
}

nameInput.addEventListener("input", onInputChange);