import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi', likesCount: 17},
        {id: 2, message: 'Hi', likesCount: 17},
        {id: 3, message: 'Hi', likesCount: 17},
        {id: 4, message: 'Hi', likesCount: 17},

    ]

    let postElement = postData.map( p => <Post message={p.message} like={p.likesCount}/>)


    return (
        <div>
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
    )
}

export default MyPosts;