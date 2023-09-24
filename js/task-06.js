const input = document.querySelector("#validation-input");
const valueLength = input.getAttribute("data-length");

const validateInput = () => {
  if (input.value.length === parseInt(valueLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", validateInput);
