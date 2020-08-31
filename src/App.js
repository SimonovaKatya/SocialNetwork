import React, {useState} from 'react';
import './App.css';
import classes from './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Games from "./Components/Games/Games";
import Videos from "./Components/Videos/Videos";
import Friends from "./Components/Friends/Friends";

const pages = [
  {path: '/profile', component: <Profile/>},
  {path: '/dialogs', component: <Dialogs/>},
  {path: '/friends', component: <Friends/>},
  {path: '/news', component: <News/>},
  {path: '/videos', component: <Videos/>},
  {path: '/games', component: <Games/>},
  {path: '/settings', component: <Settings/>},
]

const App = () => {

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            {pages.map(page => <Route path={page.path} render={() => page.component}/>)}
          </div>
        </div>
      </BrowserRouter>
  );
}


/*const returnColor = (isRed) => isRed ? {background: "red"} : {background: "blue"}

const NavBar1 = ({list, isRed}) => [list.filter(item => item.name !== 'petia').map(item => <div style={returnColor(isRed)} key={item.id}>{item.name}</div>)]*/


export default App;
