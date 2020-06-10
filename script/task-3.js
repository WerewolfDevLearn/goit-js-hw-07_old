const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGalleryItem = (galleryItem) => {
  const itemContainer = document.createElement("li");
  itemContainer.classList.add("gallery__item");

  const item = document.createElement("img");
  item.classList.add("gallery__image");
  item.setAttribute("src", `${galleryItem.url}`);
  item.setAttribute("alt", `${galleryItem.alt}`);
  itemContainer.append(item);
  return itemContainer;
};

const arrOfGalleryItems = images.map((image) => createGalleryItem(image));
const galleryContainer = document.querySelector("ul#gallery");
galleryContainer.append(...arrOfGalleryItems);
