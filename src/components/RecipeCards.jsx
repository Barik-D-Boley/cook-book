import React from 'react';
import RecipeDNE from './RecipeDNE';
// import { BiLinkExternal } from "react-icons/bi";

// const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
const pluralRegex = /(es|s)$/mi;

function RecipeCards(recipes) {
    if (recipes.recipes.data.to === 0) return <RecipeDNE />

    recipes = recipes.recipes.data.hits;
    console.log(recipes);

    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        let { image, label, calories, yield: servings, ingredientLines, ingredients, cuisineType, mealType, dishType, totalTime, cautions, url } = recipes[i].recipe;

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
                    <p className="desc short-text">{label} is a{cuisineType.charAt(0).match(/[aeiou]/mi) ? "n" : ""} {cuisineType} {dishType} served during {mealType}. This recipe makes {servings} serving{servings === 1 ? "" : "s"} at {Math.round(calories/servings)} calories per serving. This dish takes {totalTime} minutes to cook, and has {ingredientList.length} {ingredientList.length === 1 ? "ingredient" : "different ingredients"}.</p>
                    <a href={`/individualRecipe`}>More Info</a>
                </div>
            </div>
        )
    }
    return stuff;
}

export default RecipeCards