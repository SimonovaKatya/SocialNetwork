import React, {useState} from 'react';
import './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./Components/Settings/Settings";

const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*  <NavBar1 list={L} isRed={isRed}/>*/}
                {/*   <button onClick={() => setIsRed(!isRed)}>сменить цвет</button>*/}
                <div className='app-wrapper-content'>

                    <Route path='/profile' component={Profile}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
