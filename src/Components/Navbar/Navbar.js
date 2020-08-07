import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
        </div>

    </nav>
}

export default Navbar;