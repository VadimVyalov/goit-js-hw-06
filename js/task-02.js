const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//! ======= Варіант 1 >>>>>>>>>>>>
// const ingredientsList = document.querySelector("#ingredients");

// const list = ingredients.reduce((allList, ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   allList.push(item);
//   return allList;
// }, []);

// ingredientsList.append(...list);
//! ======= Варіант 1 <<<<<<<<<<<<

//! ======= Варіант 2 >>>>>>>>>>>>
// const ingredientsList = document.querySelector("#ingredients");

// const list = ingredients.map((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   return item;
// });

// ingredientsList.append(...list);
//! ======= Варіант 2 <<<<<<<<<<<<

//! ======= Варіант 3 >>>>>>>>>>>>

const makeList = (list, tagName, className) => {
  return list.map((itemName) => {
    const listItem = document.createElement(tagName);
    listItem.textContent = itemName;
    listItem.classList.add(className);
    return listItem;
  });
};

const ingredientsList = document.querySelector("#ingredients");

const newList = makeList(ingredients, "li", "item");
ingredientsList.append(...newList);
//! ======= Варіант 3 <<<<<<<<<<<<
