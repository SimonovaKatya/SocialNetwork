import React from "react";
import classes from './Music.module.css';

const Music = (props) => {
    return (
        <div className={classes.contentWrapper}>

            <div className={classes.example}>r</div>
            <div className={classes.search}>
            <div className={classes.searchLine}>
                Search
            </div>
            </div>

            <div className={classes.allMusic}>
                <div className={classes.music}>Music1</div>
                <div className={classes.music}>Music2</div>
                <div className={classes.music}>Music3</div>
                <div className={classes.music}>Music4</div>
                <div className={classes.music}>Music5</div>
                <div className={classes.music}>Music5</div>
                <div className={classes.music}>Music5</div>
                <div className={classes.music}>Music5</div>
            </div>

        </div>
    )
}

export default Music;
