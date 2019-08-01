import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems  from '../NavigationItems/NavigationItems';
const ToolBar =(props)=> (
    <header className= {classes.Toolbar}>
        <div> MENU </div>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}> <NavigationItems/> </nav>
    </header>
)


export default ToolBar;