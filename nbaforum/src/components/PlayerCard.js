import React from 'react';
import '../index.css';

const PlayerCard = ({ imgSrc, name }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PlayerCard;