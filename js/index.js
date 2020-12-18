import { renderResults }  from "./searchView.js";
import { showRecipe, clearRecipe } from "./recipeView.js";
import { addShopping }  from "./listView.js";


// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const resultList = document.querySelector('.results__list');
const recipe = document.querySelector('.recipe')

const url = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const apiKey = '0308b8bc-493c-4372-9002-8cdcb96432fa';

// Add AJAX functions here:
//get all recipes and send it to renderResults function m
const getRecipe = async () => {
    try {
        const fetchUrl = url + '?search=' + input.value + '&key=' + apiKey;
        const response = await fetch(fetchUrl);
        if(response.ok){
        const jsonResponse = await response.json();
        renderResults(jsonResponse.data.recipes);
    }   else {
        throw new Error(Error);
    }}
    catch(error){
        console.log(error)
    }
    
}

//get one recipe with id
let dataRecipe={};
const getOneRecipe = async (e) => {
    // console.log(e)
    const recId = e.path[2].id
    const fetchUrl = url + '/' + recId + '?key=' + apiKey;
    console.log(fetchUrl);
    try {
    const response = await fetch(fetchUrl);
    if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse.data.recipe)
        //send jsondata to showRecipe;
        showRecipe(jsonResponse.data.recipe);
        dataRecipe = jsonResponse.data.recipe;
    }   else {
        throw new Error('Request failed');
    }}
    catch(error){
        console.log(error)
    }
}



submitBtn.addEventListener('click', function(){
    getRecipe();
    
});


resultList.addEventListener('click', function(e){
    clearRecipe()
    getOneRecipe(e)
})

const showListBtn = document.querySelector('.recipe__btn');

// showListBtn.addEventListener('click', function(dataRecipe){
//     console.log('hi')
//     addShopping(dataRecipe);
    
// });

recipe.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.className = 'recipe__btn') {
        // Add ingredients to shopping list
        console.log(dataRecipe);
        addShopping(dataRecipe);
    }
})


