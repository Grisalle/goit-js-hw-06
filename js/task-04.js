let counterValue = 0;

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const numValue = document.querySelector("#value");

const countDecrement = () => {
    counterValue -= 1;
    numValue.textContent = counterValue;
}

const countIncrement = () => {
    counterValue += 1;
    numValue.textContent = counterValue;
}

decrementBtn.addEventListener("click", countDecrement);
incrementBtn.addEventListener("click", countIncrement);