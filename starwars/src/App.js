import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const[star,setStar] = useState({});

  useEffect(() => {
      axios.get('https://swapi.co/api/people/')
        .then (res => {
          console.log(res)
          setStar(res.data)
      })
      console.log ('Character', star);
  }, []);
 
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
       
      </div>
    );
  
}

export default App;
