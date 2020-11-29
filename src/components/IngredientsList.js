import React from 'react';
import Ingredient from './Ingredients';

export default function IngredientsList({list}){
    return (
        <ul classname="ingredients">
        { list.map( (ingredient, i) => {
            return (
            <Ingredient key={i} {...ingredient} />
            )}) 
        } 
        </ul>
    )
}