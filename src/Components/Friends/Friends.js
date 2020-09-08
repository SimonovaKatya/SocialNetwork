import React from 'react';
import classes from './Friends.module.css';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPosts from "../Profile/MyPosts/MyPosts";


const Friends = () => {
    return (
        <div className={classes.content}>

            <div className={classes.friends}>
                <div className={classes.search}>
                    <img src="https://blueprintinsurance.ca/wp-content/uploads/2015/06/Review-150x150.jpg"/>
                    <div style={{marginTop: 15, marginLeft: 3}}>...</div>
                </div>


                <div className={classes.friend}>
                    <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/oshki_oty_otiki-zhivotnye-43134.jpg"/>
                    <div className={classes.info}>
                        <div className={classes.name}>fsdf</div>
                        <div className={classes.textMessage}>fdsfds</div>
                    </div>
                </div>

                <div className={classes.friend}>
                    <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/oshki_oty_otiki-zhivotnye-43134.jpg"/>
                </div>

                <div className={classes.friend}>
                    <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/oshki_oty_otiki-zhivotnye-43134.jpg"/>
                </div>


                <div className={classes.friend}>
                    <img src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/oshki_oty_otiki-zhivotnye-43134.jpg"/>
                </div>


            </div>


        </div>
    );
}

export default Friends;
