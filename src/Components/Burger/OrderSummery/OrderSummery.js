import React from 'react';
import Aux from '../../../HOC/Aux';
import Button from '../../UI/Button/Button';
class OrderSummery extends React.Component  {
    componentWillUpdate (){
        console.log('[OrderSummery] will update');
    }
    render(){
    const ingredientSummery= Object.keys (this.props.ingredient)
    .map(igKey=> {
        return (
        <li key={igKey}> 
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredient[igKey]}
             </li>);
    });
    return(
    <Aux>
        <h3> Your Order</h3>
        <p> A Delicious Burger with the Following Ingredients:</p>
        <ul>
            {ingredientSummery}
        </ul>
        <p> <strong> Total Price:{this.props.price.toFixed(2)}</strong></p>
        <p> Continue to Check Out?</p>
        <Button btnType="Danger"  clicked={this.props.purchaseCancelled}> CANCEL </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE </Button>
    </Aux>
);
    }
}

export default OrderSummery;