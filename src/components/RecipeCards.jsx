import React from 'react';
import RecipeDNE from './RecipeDNE';
import { BiLinkExternal } from "react-icons/bi";

const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

function RecipeCards(recipes) {
    if (recipes.recipes.data.to === 0) return <RecipeDNE />

    recipes = recipes.recipes.data.hits;
    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        let { image, label, calories, yield: servings, ingredientLines, ingredients, totalTime, cautions, url } = recipes[i].recipe;
        let ingredientList = [];
        calories = Math.round(calories / 10) * 10;
        if (ingredientLines.length > 0) ingredientList = ingredientLines;
        else {
            ingredients.forEach(ing => {
                ingredientList.push(ing.text);
            });
        }
        stuff.push(  
            <div className='recipe-container' key={i}>
                <img className='recipe-img' src={image} alt={label} />
                <div className='text-container'>
                    <h1 className='recipe-part'>{label}</h1>
                    <p className='recipe-part'>{calories} calories</p>
                    <p className='recipe-part'>{Math.round(calories / servings)} calories per serving</p>
                    <p className='recipe-part'>Makes {servings} servings</p>
                    <p className='recipe-part'>Ingredients: <br />{formatter.format(ingredientList)}</p>           
                    <p className='recipe-part'>Cook time: {totalTime} minutes</p>
                    <p className='recipe-part'>Cautions: {(cautions.length === 0) ? 'None' : formatter.format(cautions)}</p>
                    <a href={url} target="_blank" rel="noreferrer"><BiLinkExternal /></a>
                </div>
            </div>
        )
    }
    return stuff;
}

export default RecipeCards