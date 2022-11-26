import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {

    const recipe = {
            borderRadius: "10px",
            boxShadow: "0px 5px 20px rgb(63, 60, 60)",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            minWidth: "40%",
    }
    return (
        <div className="" style={recipe}>
            <img className="w-100 p-2 rounded-1" src={image} alt="" /><br />
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
