import React from 'react';
import classes from './MyPosts.module.css';


const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi', likesCount: 17},
        {id: 2, message: 'Hi', likesCount: 17},
        {id: 3, message: 'Hi', likesCount: 17},
        {id: 4, message: 'Hi', likesCount: 17},

    ]




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

                </div>

            </div>
        </div>
    )
}

export default MyPosts;