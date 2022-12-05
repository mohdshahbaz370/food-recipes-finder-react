import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import Header from './Header';

const App = () => {
    const APP_ID = 'e47a1600';
    const APP_KEY = '9a557039e0971d151ab37e1d5a586440';
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
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
                <div className="mx-auto input-group w-50">
                    <input className="form-control" type="text" placeholder="Search..." value={search}
                        onChange={updateSearch} />
                    <button className="btn btn-primary input-group-text" type="submit" >
                        Search
                    </button>
                </div>
            </form>
            <div className="d-sm-flex flex-sm-row flex-wrap justify-content-sm-center">
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
