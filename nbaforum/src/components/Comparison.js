import React from 'react';

const Comparison = () => {
  const player1 = {
    name: 'Player 1',
    points: 20,
    assists: 10,
    rebounds: 5,
  };

  const player2 = {
    name: 'Player 2',
    points: 15,
    assists: 12,
    rebounds: 8,
  };

  return (
    <div>
      <h2>Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>{player1.name}</th>
            <th>{player2.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Points</td>
            <td>{player1.points}</td>
            <td>{player2.points}</td>
          </tr>
          <tr>
            <td>Assists</td>
            <td>{player1.assists}</td>
            <td>{player2.assists}</td>
          </tr>
          <tr>
            <td>Rebounds</td>
            <td>{player1.rebounds}</td>
            <td>{player2.rebounds}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Comparison;