const control = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = `${control.value}px`;

const changeFontSize = () => {
  span.style.fontSize = `${control.value}px`;
};

control.addEventListener("input", changeFontSize);
