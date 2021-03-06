import React from "react";
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummery from "../../Components/Burger/OrderSummery/OrderSummery";
//global constant in all capital characters
const INGREDIENT_PRICES= {
    salad:1.50,
    cheese:1,
    meat:2,
    bacon:2
}
class BurgerBuilder extends React.Component{
    state= {
        ingredient: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:0,
        purchasable: false,
        purchasing:false
    }

    updatePurchaseState(ingredient){
        //const ingredients={...this.state.ingredient}
       const sum= Object.keys(ingredient)
       .map(igKey=> {
           return ingredient[igKey]; 
       })
       .reduce ((sum, element) => {
        return sum+element;
       }, 0);
       this.setState({purchasable:sum>0 });// returnsd either truw or false
    
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=> {
        const oldCount=this.state.ingredient[type];
        if (oldCount<=0) {//this make ure that value is not negative
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients= {
            ...this.state.ingredient
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice, ingredient:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler=()=> {
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=> {
        alert('You Continue!');
    }
    render(){
        const disabledInfo= {
            ...this.state.ingredient
        };
        //disabledinfo key is the value of each key
        //loop through all the keay sin disabled info and check the value
        for  (let key in disabledInfo) {
            disabledInfo[key]=disabledInfo[key]<=0// this check will return true or false
        }
       
        return(
            <Aux>
                <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}> 
                        <OrderSummery 
                            ingredient={this.state.ingredient} 
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            price={this.state.totalPrice}/> 
                            </Modal> 
             <Burger ingredient={this.state.ingredient}/>
                <BuildControls ingredientAdded= {this.addIngredientHandler}
                                ingredientRemoved={this.removeIngredientHandler}
                                disabled={disabledInfo}
                                price={this.state.totalPrice}
                                purchasable={this.state.purchasable}
                                ordered={this.purchaseHandler}/>
            </Aux>
        );
    };

}

export default BurgerBuilder;