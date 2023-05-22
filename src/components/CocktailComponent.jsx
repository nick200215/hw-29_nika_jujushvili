// import React from "react";

const CocktailComponent = ({ cocktail, handleClick }) => {
  return (
    <article className="cocktail-container" key={cocktail.idDrink}>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
      <button onClick={handleClick}>Delete me</button>
    </article>
  );
};

export default CocktailComponent;
