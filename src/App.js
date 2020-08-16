import React, {useState} from 'react';
import './App.css';
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";



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
  <Messages/>
  <Route exact path='/dialogs' component={Messages}/>
</BrowserRouter>



  );
}

/*const returnColor = (isRed) => isRed ? {background: "red"} : {background: "blue"}

const NavBar1 = ({list, isRed}) => [list.filter(item => item.name !== 'petia').map(item => <div style={returnColor(isRed)} key={item.id}>{item.name}</div>)]*/


export default App;
