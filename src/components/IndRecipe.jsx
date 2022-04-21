import React from "react";

function IndRecipe(recipe) {
    console.log(recipe);
    let { /* calories, cautions, cuisineType, dietLabels, digest, dishType, healthLabels, */ image, /* ingredientLines, ingredients, */ label,  } = recipe.recipe;

    return (
        <div id="more-recipe-info-container">
            <div id="more-recipe-info">
                <img src={image} alt={label} />
                <h1>{label}</h1>
            </div>
        </div>
    )
}

export default IndRecipe