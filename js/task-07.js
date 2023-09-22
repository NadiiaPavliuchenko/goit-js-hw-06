const control = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const changeFontSize = () => {
  span.style.fontSize = `${control.value}px`;
};

control.addEventListener("input", changeFontSize);
