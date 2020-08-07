import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img
                src="https://cdn.nlotv.com/i/image_1140x561/uploads/nlo/news/5e15a12b4a94c_thumb_1920_79588.jpeg"/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>

        </div>
    )
}

export default Post;