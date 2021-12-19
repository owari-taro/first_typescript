import React from "react";
import Recipe from "./Recipe";

function Menu({ recipies }) {
    return (
        <article>
            <header>
                <h1>delicious recipes</h1>
            </header>
            <div className="recipes">
                {recipies.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );  
}