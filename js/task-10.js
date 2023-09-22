function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const createGallery = () => {
  let size = 30;
  for (let i = 0; i < number.value; i += 1) {
    const galleryItem = document.createElement("div");
    galleryItem.style.height = `${size}px`;
    galleryItem.style.width = `${size}px`;
    galleryItem.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(galleryItem);
    size += 10;
  }
};

const destroyGallery = () => {
  boxes.innerHTML = "";
  number.value = "";
};

createBtn.addEventListener("click", createGallery);
destroyBtn.addEventListener("click", destroyGallery);
