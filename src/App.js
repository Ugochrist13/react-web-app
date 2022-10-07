import React, { useState } from 'react';
import Body from './Body'
import NavBar from './NavBar'
import './App.css';

function App() {

const [location, setLocation] = useState("EN")

const changeLocation = ()=> location === "EN"? setLocation("NG") : setLocation("EN")

return (
  <div className='app'>
  <NavBar location= {location} />
  <Body />
  <div className = "btn"><button onClick={changeLocation}>Change Location</button></div>
  </div>
)
}

export default App;