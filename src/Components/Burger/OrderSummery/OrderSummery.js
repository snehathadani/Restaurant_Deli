import React from 'react';
import Aux from '../../../HOC/Aux';
import Button from '../../UI/Button/Button';
const OrderSummery= (props)=> {
    const ingredientSummery= Object.keys (props.ingredient)
    .map(igKey=> {
        return (
        <li key={igKey}> 
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredient[igKey]}
             </li>);
    })
    return(
    <Aux>
        <h3> Your Order</h3>
        <p> A Delicious Burger with the Following Ingredients:</p>
        <ul>
            {ingredientSummery}
        </ul>
        <p> <strong> Total Price:{props.price.toFixed(2)}</strong></p>
        <p> Continue to Check Out?</p>
        <Button btnType="Danger"  clicked={props.purchaseCancelled}> CANCEL </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}> CONTINUE </Button>
    </Aux>
);
    }

export default OrderSummery;