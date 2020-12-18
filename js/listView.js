const listView = document.querySelector(".shopping__list");

export const addShopping = (recipe) => {
  console.log(recipe);
  const recipeList = recipe.ingredients;
 
  recipeList.forEach((element) => {
    const shopList = 
    `
    <li class="shopping__item">
      <div class="shopping__count">
        <input type="number" value=${element.quantity} step="100">
        <p>${element.unit || ''}</p>
      </div>
      <p class="shopping__description">${element.description} </p>
      <button class="shopping__delete btn-tiny">
        <svg>
          <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
    </button>
  </li>
    `;
    listView.insertAdjacentHTML("beforeEnd", shopList);
  });
};
