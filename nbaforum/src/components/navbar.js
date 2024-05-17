import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">NBA StatsForum</Link>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/players">Player Stats</Link>
        <Link className="nav-item nav-link" to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
};

export default Navbar;