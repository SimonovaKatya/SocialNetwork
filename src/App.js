import React, {useState} from 'react';
import './App.css';
import Messages from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {

    return (
        <BrowserRouter>
            <Dialogs/>
            <Route path='/dialogs' component={Dialogs}/>
        </BrowserRouter>


    );
}


export default App;
