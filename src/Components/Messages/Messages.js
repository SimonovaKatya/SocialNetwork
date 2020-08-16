import React from "react";
import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.item}>
                       <NavLink to='/dialogs/1'>Sasha</NavLink>
                    </div>
                    <div className={classes.item +' '+ classes.active}>
                        <NavLink to='/dialogs/2'>Katy</NavLink>
                    </div>
                    <div className={classes.item}>
                      <NavLink to='/dialogs/3'>Nasty</NavLink>
                    </div>
                    <div className={classes.item}>
                       <NavLink to='/dialogs/4'>Polina</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/5'>Vlad</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/6'>Max</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/7'>Mark</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/8'>Valera</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/9'>Anton</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/10'>Andrey</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/dialogs/11'>Sveta</NavLink>
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Bue</div>
                    <div className={classes.message}>How are you?</div>
                    <div className={classes.message}>HIHI</div>
                    <div className={classes.message}>Bue</div>
                    <div className={classes.message}>Bue</div>
                    <div className={classes.message}>TSU</div>
                    <div className={classes.message}>HIHI</div>
                    <div className={classes.message}>How are you?</div>
                    <div className={classes.message}>HIHI</div>
                    <div className={classes.message}>hahahah</div>
                    <div className={classes.message}>How are you?</div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
