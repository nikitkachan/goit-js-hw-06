const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");
const ingredientsArr = [];
for (let i = 0; i < ingredients.length; i +=1) {
  
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredients[i];
  newIngredient.classList.add("item");

  ingredientsArr.push(newIngredient);

}

ingredientsListEl.append(...ingredientsArr)