import React from "react";
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
//global constant in all capital characters
const INGREDIENT_PRICES= {
    salad:1,
    cheese:1,
    meat:2,
    bacon:2
}
class BurgerBuilder extends React.Component{
    state= {
        ingredient: {
            salad:1,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:6
    }
    addIngredientHandler=(type)=> {
        const oldCount= this.state.ingredient[type];
        const updatedCount= oldCount+1;
        const updatedIngredients= {
            ...this.state.ingredient
        };
        updatedIngredients[type]=updatedCount;
        //map the ingredient cost what
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice, ingredient:updatedIngredients})
    }

    removeIngredientHandler=(type)=> {
        
    }


    render(){
        return(
            <Aux>
             <Burger ingredient={this.state.ingredient}/>
                <BuildControls ingredientAdded= {this.addIngredientHandler}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;