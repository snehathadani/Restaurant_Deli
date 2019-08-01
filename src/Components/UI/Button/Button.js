import React from 'react';
import classes from './Button.module.css';

/* btnType is a prop you set from outside. also use join to have list of classes which is a string in the end*/

const Button = (props)=> (
    <button className={[classes.Button, classes[props.btnType]].join(' ')} 
    onClick={props.clicked} > {props.children}</button>
);

export default Button;