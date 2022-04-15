import React from 'react';
import RecipeDNE from './RecipeDNE';
import axios from 'axios';

function joinInput(input) {
    if (input.length === 0) return 'None';
    else if (input.length === 1) return input;
    else if (input.length > 1) return input.join(', '); 
}

function RecipeCards(recipes) {
    if (recipes.recipes.data.to === 0) return <RecipeDNE />
    function webSearch(recipeName) {
        const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
        params: {
            q: `${recipeName}`,
            pageNumber: '1',
            pageSize: '1',
            autoCorrect: 'false'
        },
        headers: {
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'x-rapidapi-key': '39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db'
        }
        };

        axios.request(options).then(function (response) {
            window.open(response.data.value[0].url)
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    recipes = recipes.recipes.data.hits;
    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        const { image, label, calories, yield: servings, ingredientLines, ingredients, totalTime, cautions } = recipes[i].recipe;
        let ingredientList = [];
        if (ingredientLines.length > 0) ingredientList = ingredientLines;
        else {
            ingredients.forEach(ing => {
                ingredientList.push(ing.text);
            });
        }
        stuff.push(  
            <div className='recipeContainer' key={i}>
                <img className='recipeImg' src={image} alt={label} />
                <div className='textContainer'>
                    <h3 className='recipePart'>{label}</h3>
                    <p className='recipePart'>{Math.round(calories/10)*10} calories</p>
                    <p className='recipePart'>Makes {servings} servings</p>
                    <p className='recipePart'>Ingredients: <br />{ingredientList.splice(0, 6).join(', ')}</p>           
                    <p className='recipePart'>Cook time: {totalTime} minutes</p>
                    <p className='recipePart'>Cautions: {joinInput(cautions)}</p>
                    <button className='submitBtn' onClick={() => webSearch(label)}>Recipe Link</button>
                </div>
            </div>
        )
    }
    return stuff;
}

export default RecipeCards