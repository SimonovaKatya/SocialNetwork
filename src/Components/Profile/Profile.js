import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


    let postData = [
        {id: 1, message: 'Hi', likesCount: 17},
        {id: 2, message: 'Hi', likesCount: 17},
        {id: 3, message: 'Hi', likesCount: 17},
        {id: 4, message: 'Hi', likesCount: 17},
        {id: 5, message: 'Hi', likesCount: 17},
        {id: 6, message: 'Hi', likesCount: 20},
        {id: 7, message: 'Hi', likesCount: 17},
        {id: 8, message: 'Hi', likesCount: 17},
        {id: 9, message: 'Hi', likesCount: 27},
        {id: 10, message: 'Hi', likesCount: 17},

    ]

    let postElement = postData.map( p => <Post message={p.message} like={p.likesCount}/>)

function Profile() {
    return (
        <div className={classes.wrapperContent}>
                <div className={classes.avatar}>
                    <img
                        src='https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183238-453f2df8-me.jpg'/>
                </div>

                 <div className={classes.descriptionBlock}>
                ava + description
                 </div>

            <div className={classes.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postElement}
                </div>

            </div>
        </div>
    );
}

export default Profile;
