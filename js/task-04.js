const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

let counterValue = 0;

const handleClickIncrement = () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
};

const handleClickDecrement = () => {
    counterValue -= 1;
    counter.innerHTML = counterValue;
};

incrementBtn.addEventListener("click", handleClickIncrement);
decrementBtn.addEventListener("click", handleClickDecrement);