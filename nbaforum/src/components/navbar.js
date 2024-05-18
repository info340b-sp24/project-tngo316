import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to="/" className='site-title'>
                Homepage
            </Link>
            <ul>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
                <li>
                    <Link to="/playerstats">Player Stats</Link>
                </li>
            </ul>
            <div/>
        </nav>
    );
}
