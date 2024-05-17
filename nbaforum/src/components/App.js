import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import PlayerList from './playerlist';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Header message="NBA Statistics" />
      <PlayerList />
      <Footer />
    </div>
  );
}

export default App;