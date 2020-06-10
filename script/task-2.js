const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// --Ver.01--//

// ingredients.forEach((element) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = element;
//   document.querySelector("ul#ingredients").appendChild(listItem);
// });
//--Ver.02--//

const createListItem = (ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
};

const listOfIngedients = ingredients.map((ingredient) =>
  createListItem(ingredient)
);
console.log(listOfIngedients);
const list = document.querySelector("ul#ingredients");
list.append(...listOfIngedients);
