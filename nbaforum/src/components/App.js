import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header.js';
import PlayerList from './playerlist.js';
import { Footer } from './Footer.js';
import { Navbar } from './navbar.js';
import { QuizPage } from './QuizPage.js';
import { PlayerStatsPage } from '.playerstatspage.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header message="NBA Statistics" />
      <PlayerList />
      <Footer />
    </div>
  );
}

export default App;