import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Games from "./Components/Games/Games";
import Videos from "./Components/Videos/Videos";
import Friends from "./Components/Friends/Friends";


/*const L = [
    {name: 'mark', id: 1},
    {name: 'katy', id: 3},
    {name: 'petia', id: 4},
    {name: 'max', id: 7},
]*/

const App = () => {
  /* const [isRed, setIsRed] = useState(true)*/

  return (
      <BrowserRouter>


        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/messages'  render={() => <Messages/>}/>
            <Route path='/friends'  render={() => <Friends/>}/>
            <Route path='/news'  render={() =><News/>}/>
            <Route path='/music' render={() =><Music/>}/>
            <Route path='/videos'  render={() =><Videos/>}/>
            <Route path='/games'  render={() =><Games/>}/>
            <Route path='/settings' render={() =><Settings/>}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

/*const returnColor = (isRed) => isRed ? {background: "red"} : {background: "blue"}

const NavBar1 = ({list, isRed}) => [list.filter(item => item.name !== 'petia').map(item => <div style={returnColor(isRed)} key={item.id}>{item.name}</div>)]*/


export default App;
