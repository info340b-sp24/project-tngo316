import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import { Footer } from './Footer';
import PlayerCard from './PlayerCard';
import Comparison from './Comparison';

const PlayerStats = () => {
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
      <Header />
      <nav className="navbar">
        <div className="nav-menu">
          <a href="index.html" className="nav-link">Homepage</a>
          <a href="playerstats.html" className="nav-link">Player Stats</a>
          <a href="quiz.html" className="nav-link">Quiz</a>
        </div>
        <div className="hamburger-menu">
          <a href="#" className="hamburger-link"><span className="hamburger-icon">&#9776;</span></a>
        </div>
      </nav>

      <main>
        <h1>Compare Players</h1>
        <p>Compare the stats of two NBA players side by side.</p>
        <PlayerCard {...player1} />
        <PlayerCard {...player2} />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
}

export default PlayerStats;