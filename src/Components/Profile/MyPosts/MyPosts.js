import React, {useState} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let Data = [
        {id: 1, message: 'Hi', likesCount: 17},
    ]

    const [postBanan, setPostMessage] = useState('')
    const [postApelcin, setPostData] = useState(Data)

    let postElement = postApelcin.map(p => <Post message={p.message} like={p.likesCount}/>)


    return (
        <div>
            <div className={classes.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea value={postBanan} onChange={(e) => setPostMessage(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button onClick={() => {
                            setPostData([{
                                id: Date.now(),
                                message: postBanan,
                                likesCount: (Math.random() * 100).toFixed(0)
                            }, ...postApelcin])
                            setPostMessage('       \\(-_-)/')
                        }}>
                            Add post
                        </button>
                        {/*    */}
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
