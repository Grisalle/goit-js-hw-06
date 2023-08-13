const inputEl = document.querySelector("#validation-input");

const blurEl = (event) => {
    const inputSelector = event.currentTarget;
    const inputLength = Number(inputSelector.dataset.length);
    if (inputSelector.value.length === inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener("blur", blurEl);