import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialogs + '' + classes.active}>
            <div className={classes.dialogsItem}>
                <NavLink to={path}>  {props.name}gdffghfg </NavLink>
            </div>


        </div>
    )
}

// export default DialogItem;
