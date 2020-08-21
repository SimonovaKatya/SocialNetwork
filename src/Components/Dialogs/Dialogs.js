import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'Vlad'},
        {id: 8, name: 'Polina'},
        {id: 9, name: 'Mark'},
        {id: 10, name: 'Katy'},
        {id: 11, name: 'Valera'},
        {id: 12, name: 'Valera'},
    ]

    let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Whht'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hello'},
        {id: 7, message: 'Yo'},
        {id: 8, message: 'Hi'},
        {id: 9, message: 'Yo'},
        {id: 10, message: 'Yo'},
        {id: 11, message: 'Yo'},
        {id: 12, message: 'Yo'}
    ]

    let messagesElement = messagesData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;
