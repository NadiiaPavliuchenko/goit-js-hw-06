let counterValue = 0;
const value = document.querySelector("#value");

const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");

const decValue = () => {
  counterValue--;
  value.textContent = counterValue;
};
const incValue = () => {
  counterValue++;
  value.textContent = counterValue;
};

decrement.addEventListener("click", decValue);
increment.addEventListener("click", incValue);
