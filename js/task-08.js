const form = document.querySelector(".login-form");

form.addEventListener("submit", onHandleClick);

function onHandleClick(event) {
    event.preventDefault();
    
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        return alert("Все поля должны быть заполнены!");
    };

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
   
    const dataObject = {
        email,
        password,
    };

    event.currentTarget.reset();

     console.log(dataObject);
    return dataObject;
   
}
