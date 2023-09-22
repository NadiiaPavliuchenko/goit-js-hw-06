const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.gap = "24px";

const gallery = images
  .map(
    ({ url, alt }) => `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}">
    </li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", gallery);

const galleryItems = document.querySelectorAll(".gallery-item");
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((item) => {
  item.style.width = "calc(100% - 48px) / 3";
});

galleryImages.forEach((image) => {
  image.style.maxWidth = "100%";
  image.style.height = "auto";
});
