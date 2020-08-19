import React from 'react';
import  classes from './Header.module.css';
import img from './Star 1.svg'

const Header = () => {
    return <header className={classes.header}>
        <img
            src={img}/>
    </header>
}


export default Header;
