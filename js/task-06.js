const validationInput = document.getElementById("validation-input");
console.dir(validationInput);

const onBlurChange = (event) => {
    
if (event.currentTarget.value.trim().length !== parseInt(event.currentTarget.dataset.length)) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
}
    else {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    }
}

validationInput.addEventListener("input", onBlurChange);