const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");
const ingredientsArr = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");

ingredientsListEl.insertAdjacentHTML("afterbegin", ingredientsArr)