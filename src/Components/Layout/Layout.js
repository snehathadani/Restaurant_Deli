import React from "react";
import Aux from '../../HOC/Aux';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const Layout =(props)=> (
    <Aux>
    <ToolBar/>
    <SideDrawer/>
    <main className= {classes.Content}>
        {props.children}
    </main>
    </Aux>
)


export default Layout;