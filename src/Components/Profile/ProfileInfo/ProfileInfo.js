import React from 'react';
import classes from '../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div className={classes.avatar}>
                    <img
                        src='https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183238-453f2df8-me.jpg'/>
                </div>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;
