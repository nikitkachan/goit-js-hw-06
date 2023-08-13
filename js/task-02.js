const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientPotatoEl = document.createElement("li");
ingredientPotatoEl.textContent = ingredients[0];
ingredientPotatoEl.classList.add("item");

const ingredientMushroomsEl = document.createElement("li");
ingredientMushroomsEl.textContent = ingredients[1];
ingredientMushroomsEl.classList.add("item");

const ingredientGarlicEl = document.createElement("li");
ingredientGarlicEl.textContent = ingredients[2];
ingredientGarlicEl.classList.add("item");

const ingredientTomatosEl = document.createElement("li");
ingredientTomatosEl.textContent = ingredients[3];
ingredientTomatosEl.classList.add("item");

const ingredientHerbsEl = document.createElement("li");
ingredientHerbsEl.textContent = ingredients[4];
ingredientHerbsEl.classList.add("item");

const ingredientCondimentsEl = document.createElement("li");
ingredientCondimentsEl.textContent = ingredients[5];
ingredientCondimentsEl.classList.add("item");

ingredientsListEl.append(ingredientPotatoEl, ingredientMushroomsEl, ingredientGarlicEl, ingredientTomatosEl, ingredientHerbsEl, ingredientCondimentsEl);