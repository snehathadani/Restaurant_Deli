import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../HOC/Aux';
const SideDrawer = (props)=> {
    let attachedClasses= [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses= [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        
        </Aux>
    )
}
export default SideDrawer;