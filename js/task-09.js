function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorTextEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

const randomColor = () => {
  const hexColor = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = hexColor;
  colorTextEl.textContent = hexColor;
}

buttonEl.addEventListener("click", randomColor);
