import React from "react";
import classes from './Videos.module.css';

const Videos = (props) => {
    return (
        <div className={classes.contentWrapper}>

            <div className={classes.search}>
                <div className={classes.searchLine}>
                    <img src="https://static.thenounproject.com/png/41373-200.png"/>
                    <div className={classes.text}>
                        Search...
                    </div>
                </div>
            </div>

            <div className={classes.allVideos}>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
                <div className={classes.video}></div>
            </div>

        </div>
    )
}

export default Videos;
