import React from "react";
import classes from './News.module.css';

const News = (props) => {
    return (
        <div className={classes.wrapper}>

            <div className={classes.search}>
                search
            </div>

            <div className={classes.name}>
                <img src="https://risovashki.tv/media/photos/2020/01/21/d61d6f8f8acb4cb1bfb6f5219f1bf007.jpg"/>Name<br/>
                <img src="https://risovashki.tv/media/photos/2020/01/21/d61d6f8f8acb4cb1bfb6f5219f1bf007.jpg"/>Name<br/>
                <img src="https://risovashki.tv/media/photos/2020/01/21/d61d6f8f8acb4cb1bfb6f5219f1bf007.jpg"/>Name<br/>
                <img src="https://risovashki.tv/media/photos/2020/01/21/d61d6f8f8acb4cb1bfb6f5219f1bf007.jpg"/>Name<br/>
                <img src="https://risovashki.tv/media/photos/2020/01/21/d61d6f8f8acb4cb1bfb6f5219f1bf007.jpg"/>Name<br/>

            </div>

            <div className={classes.post1}>
                <img src="http://www.fonstola.ru/download.php?file=201510/800x600/fonstola.ru-209312.jpg"/>
            </div>

            <div className={classes.post2}>
                <img src="https://catspaw.ru/wp-content/uploads/2016/03/Rune_Jensen.jpg"/>
            </div>



        </div>
    )
}

export default News;
