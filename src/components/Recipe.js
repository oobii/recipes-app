import React from "react";
import IngredientsList from './IngredientsList';
import Instuctions from './Instructions';

export default function Recipe({ name, ingredients, steps }) {
    return (
        <div>
          <h3>{name}</h3>
          <IngredientsList list={ingredients}/>
          <Instuctions title="Cooking Instructions" steps={steps} />
        </div>
        
    );

}