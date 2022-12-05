import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {

    return (
        <div id="recipe" className="text-center mb-5 mx-5 text-bg-danger rounded-4 border border-dark shadow-lg">
            <img className="w-75 p-2 rounded-5 h-25" src={image} alt="" /><br />
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
        </div>
    );
}

export default Recipe;