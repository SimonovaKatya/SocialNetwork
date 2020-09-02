import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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


let postData = [
    {id: 1, message: 'Hi', likesCount: 17},
    {id: 2, message: 'Hi', likesCount: 17},
    {id: 3, message: 'Hi', likesCount: 17},
    {id: 4, message: 'Hi', likesCount: 17},
]

let postElement = postData.map(p => <Post message={p.message} like={p.likesCount}/>)

function Profile() {
    return (
        <div className={classes.wrapperContent}>
            <div className={classes.avatar}>
                <img src='https://i.pinimg.com/736x/fa/04/0d/fa040d4fb07882160031efd57461b911.jpg'/>
                AVATAR
            </div>

            <div className={classes.descriptionBlock}>
                ava + description
            </div>

            <div className={classes.friendList}>
                <div className={classes.textFriends}>FRIEND</div>
                <hr/>
                <img src="https://colores.org.es/imagenes_colores/amarillo-pastel.jpg"/>
                <img src="https://colores.org.es/imagenes_colores/amarillo-pastel.jpg"/>
                <img src="https://colores.org.es/imagenes_colores/amarillo-pastel.jpg"/>
                <img src="https://colores.org.es/imagenes_colores/amarillo-pastel.jpg"/>
                <img src="https://colores.org.es/imagenes_colores/amarillo-pastel.jpg"/>
            </div>

            <div className={classes.personalInformation}>
                INFORMATION
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
