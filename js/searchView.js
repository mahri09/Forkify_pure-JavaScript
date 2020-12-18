

//take data from getRecipe and show it into dom
const renderResults = recipe => {
  // console.log(recipe);
  const result = document.querySelector('.results__list');
  console.log(result)
  while(result.firstChild){
    result.removeChild(result.firstChild);
  }
  
  recipe.forEach(item => {
    const resultList = `
    <li>
      <a id=${item.id} class="results__link results__link--active" href="#23456">
        <figure class="results__fig">
            <img src=${item.image_url} alt="Test">
        </figure>
        <div class="results__item">
            <h4 class="results__name">${item.title}</h4>
            <p class="results__author">${item.publisher}</p>
        </div>
      </a>
    </li>`
    result.insertAdjacentHTML("beforeEnd", resultList);
  });
//select a href elements inside resultList and onclick get id and send it to getOneRecipe function
  // document.querySelector('.results__link').addEventListener('click', getOneRecipe)

};

export {renderResults};