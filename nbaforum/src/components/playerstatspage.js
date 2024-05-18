import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';
import PlayerCard from './PlayerCard';
import Comparison from './Comparison';

const PlayerStatsPage = () => {
  const player1 = {
    imgSrc: '../../public/img/lebronsunshinecover.jpg',
    name: 'Player 1',
  };

  const player2 = {
    imgSrc: '../../public/img/lebronsunshinecover.jpg',
    name: 'Player 2',
  };

  return (
    <div>
      <main>
        <h1>Compare Players</h1>
        <p>Compare the stats of two NBA players side by side.</p>
        <PlayerCard {...player1} />
        <PlayerCard {...player2} />
        <Comparison />
      </main>
 
    </div>
  );
}

export default PlayerStatsPage;