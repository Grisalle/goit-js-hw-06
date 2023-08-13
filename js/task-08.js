const formEl = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const submitResult = { email: email.value, password: password.value };
    console.log(submitResult);
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);