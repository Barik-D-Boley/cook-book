import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { AiOutlineSearch } from 'react-icons/ai';

/* Components */
import Welcome from '../components/Welcome';
import RecipeCards from '../components/RecipeCards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Recipes() {
    const [boolean, setBoolean] = useState(false);
    const [recipe, setRecipe] = useState();

    function setMealValues(e) {
        e.preventDefault();
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${document.getElementById('query').value}&app_id=11ff8d9e&app_key=01250d39e0db773e22ad3860dcbfc9f9&random=false`)
            .then((response) => {
                setRecipe(response);
                setBoolean(true);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div id="recipe-page">
            <Helmet>
                <title>Recipes</title>
            </Helmet>
            <Navbar />

            <form id="search" onSubmit={(e) => { setMealValues(e) }}>
                <input className="search-bar" id="query" name="query" type="text" placeholder="Search" />
                <button className="search-bar" id="search-btn" type="submit"><AiOutlineSearch /></button>
            </form>
            {boolean ? <RecipeCards recipes={recipe} /> : <Welcome />}

            <Footer />
        </div>
    )
}

export default Recipes;