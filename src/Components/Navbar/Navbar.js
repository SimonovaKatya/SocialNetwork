import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import Videos from "../Videos/Videos";
import Games from "../Games/Games";


const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/videos' activeClassName={classes.active}>Videos</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/games' activeClassName={classes.active}>Games</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
        </div>

    </nav>
}

export default Navbar;
