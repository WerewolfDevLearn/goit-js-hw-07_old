const listOfCategories = document.querySelectorAll("ul#categories > li.item");
// console.log(listOfCategories);
const numberCategories = listOfCategories.length;
console.log(`В списке ${numberCategories} категории`);

listOfCategories.forEach((elem) => {
  console.log("Категория:", elem.querySelector("h2").textContent);
  console.log("Количество элементов:", elem.querySelectorAll("ul > li").length);
});
