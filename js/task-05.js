const inputEl = document.querySelector("#name-input");
const h1El = document.querySelector("#name-output");

const inputValue = (event) => {
    h1El.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        h1El.textContent = 'Anonymous'
    }
}

inputEl.addEventListener("input", inputValue);