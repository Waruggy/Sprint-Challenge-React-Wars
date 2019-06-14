import React from 'react';
import Card from './Card';
import './StarWars.css';

const CharCards = props => {
  return (
    <div className="CharCard">
      {props.starwarsChars.map(character => {
        return <Card key={character.created} characterInfo={character} />;
  })}
    </div>
  );
};

 export default CharCards;