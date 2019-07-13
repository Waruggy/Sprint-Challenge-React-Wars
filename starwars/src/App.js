import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

const App = () => {
  const[star, setStar] = useState([]);
    
    
  useEffect(() => {
      axios.get("https://swapi.co/api/people/")
        .then (res => {
          console.log(res)
          setStar(res.data.results)
      })
      console.log ('Character', star);
      
  }, []);
 
    return (
      <div className="App">
        <h1 className="ui header">
        <Header>React Wars</Header>
        </h1>
        {star.map(character => (<p>{character.name}</p>))}
      </div>
    );
  
}

export default App;
