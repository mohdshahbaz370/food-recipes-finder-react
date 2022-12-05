import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import Header from './Header';
import './App.css';

const App = () => {
    const APP_ID = 'e47a1600';
    const APP_KEY = '9a557039e0971d151ab37e1d5a586440';
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("biryani");
    useEffect(() => {
        getRecipes();
    }, [query])
    const getRecipes = async () => {
        const response = await fetch
            (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        // console.log(data);

    };
    const updateSearch = e => {
        setSearch(e.target.value);
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <>
            <Header />
            <form className="my-5" onSubmit={getSearch} >
                <div id="searchButton" className="mx-auto input-group">
                    <input className="form-control" type="text" placeholder="Search here for food recipes..." value={search}
                        onChange={updateSearch} />
                    <button className="btn btn-primary input-group-text" type="submit" >
                        Search
                    </button>
                </div>
            </form>
            <div id="flexContainer" className="d-flex flex-wrap justify-content-center">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
