import React from "react";
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends React.Component{
    state= {
        ingredient: {
            salad:1,
            bacon:0,
            cheese:0,
            meat:0
        }
    }

    render(){
        return(
            <Aux>
             <Burger ingredient={this.state.ingredient}/>
                <BuildControls/>
            </Aux>
        );
    }

}

export default BurgerBuilder;