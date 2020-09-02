import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://womanadvice.ru/sites/default/files/imagecache/width_660/20/viral/10beg_na_dvuh_lapah.jpg"/>
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
            </div>

            <div className={classes.descriptionBlock}>
              <div className={classes.name}>Name Surname</div>
                <hr/>
             <div className={classes.status}>Status information</div>
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
                <div className={classes.textInformation}>INFORMATION</div>
                <hr/>
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
