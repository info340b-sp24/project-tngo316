import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Navbar } from './navbar.js';
import { players } from './playerlist.js';
import { QuizCard } from './QuizCard.js';


export function QuizPage(props){
    let randomPlayers = [];
    for (let i = 0; i < 3; i++) {
        randomPlayers.push(players[Math.floor(Math.random() * players.length)]);
    }

    return(
        <div>
            <Header />
            <Navbar />
            <QuizCard players={randomPlayers}/>
            <Footer />
        </div>
    );
}