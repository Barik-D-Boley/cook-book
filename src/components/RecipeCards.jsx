import React, { useState } from 'react';
import IndRecipe from './IndRecipe';
import RecipeDNE from './RecipeDNE';

// Icons
import { MdClose } from 'react-icons/md';

// const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
const pluralRegex = /(es|s)$/mi;

function RecipeCards(recipes) {
    const [recipeInfo, setRecipeInfo] = useState(undefined);

    if (recipes.recipes.data.to === 0) return <RecipeDNE />
    recipes = recipes.recipes.data.hits;

    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        let { image, label, calories, yield: servings, ingredientLines, ingredients, cuisineType, mealType, dishType, totalTime, source } = recipes[i].recipe;

        let ingredientList = [];
        calories = Math.round(calories / 10) * 10;
        cuisineType = cuisineType[0].charAt(0).toUpperCase() + cuisineType[0].slice(1);
        if (dishType[0] === 'condiments and sauces') {
            dishType = 'condiment or sauce';
        } else if (dishType[0].match(pluralRegex)) {
            dishType[0] = dishType[0].replace(pluralRegex, '');
        }
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
                        <h3 className='title short-text'>{label}</h3>
                        <h3 className='title price short-text'>{calories} Calories</h3>
                    </div>
                    <hr className='itemUnderline' />
                    <p className="desc short-text">{label} is a{cuisineType.charAt(0).match(/[aeiou]/mi) ? "n" : ""} {cuisineType} {dishType} served during {mealType}. This recipe makes {servings} serving{servings === 1 ? "" : "s"} at {Math.round(calories/servings)} calories per serving. The dish takes {totalTime} minutes to cook, and has {ingredientList.length} {ingredientList.length === 1 ? "ingredient" : "different ingredients"}. This recipe has been provided to the Everything Cookbook™by the lovely people at <em>{source}</em>.</p>
                    <button onClick={() => setRecipeInfo(recipes[i].recipe)}>More Info</button>
                </div>
            </div>
        )
    }
    return <div id="all-recipes">
        {stuff}
        {recipeInfo != undefined ? <IndRecipe recipe={recipeInfo} /> : ""}
        <MdClose className="close-out" style={{ display: `${recipeInfo == undefined ? "none" : "flex"}` }} onClick={() => setRecipeInfo(undefined)} />
    </div>;
}

export default RecipeCards