const validationInput = document.getElementById("validation-input");
console.dir(validationInput);

const onBlurChange = (event) => {
    
if (event.currentTarget.value.length != event.currentTarget.dataset.length) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
}
    if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    }
}

validationInput.addEventListener("input", onBlurChange)
