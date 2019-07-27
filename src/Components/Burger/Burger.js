import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = (props)=> {
    let transformedIngredient=Object.keys(props.ingredient) //extracts the keys of the given object and turns into array
        .map(ingredientsKey=> {
            //should have length of given elements if 2 cheese then arrays with length of 2 
            return [...Array(props.ingredient[ingredientsKey] )] //array(3) will give arrays with 3 undefined spaces
            //Array(length) length should be the amount of given ingredient
            .map((_, i) => {
               return  <BurgerIngredient key={ingredientsKey+ i} type={ingredientsKey}/>;
            });

        })
        .reduce((arr,element)=> {
            return arr.concat(element)
        }, []);
        if (transformedIngredient.length===0) {
            transformedIngredient= <p> Please Add Ingredients </p>
        }
        console.log(transformedIngredient);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type= "bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type= "bread-bottom"/>
        </div>
    );
}

export default Burger;