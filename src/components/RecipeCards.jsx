import React from 'react';
import RecipeDNE from './RecipeDNE';
// import { BiLinkExternal } from "react-icons/bi";

const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

function RecipeCards(recipes) {
    if (recipes.recipes.data.to === 0) return <RecipeDNE />

    recipes = recipes.recipes.data.hits;
    console.log(recipes);

    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        let { image, label, calories, yield: servings, ingredientLines, ingredients,/*  totalTime, cautions, url  */} = recipes[i].recipe;
        let ingredientList = [];
        calories = Math.round(calories / 10) * 10;
        if (ingredientLines.length > 0) ingredientList = ingredientLines;
        else {
            ingredients.forEach(ing => {
                ingredientList.push(ing.text);
            });
        }
        stuff.push(
            <div className='menuItem' key={i}>
                <div className='img-container'><img className='image' src={image} alt={label} /></div>
                <div className='textContainer'>
                    <div className='inlineTitle'>
                        <h3 className='title'>{label}</h3>
                        {/* <h3 className='title price'>{calories} Calories</h3>
                        <h3 className='title price'>{servings} Serving{servings === 1 ? "" : "s"}</h3> */}
                        <h3 className='title price'>{Math.round(calories/servings)} Calories per Serving</h3>
                    </div>
                    <hr className='itemUnderline' />
                    {/* <p className='desc'>{formatter.format(ingredientList)}</p> */}
                    <p className='desc'>{calories} Calories</p>
                    <p className='desc'>{servings} Serving{servings === 1 ? "" : "s"}</p>

                    <a href={`/individualRecipe`}>More Info</a>
                </div>
            </div>
        )
    }
    return stuff;
}

export default RecipeCards