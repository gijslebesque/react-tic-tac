import React from 'react';

export default function Header({ winner = '' }) {
  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <h2>{winner}</h2>
    </header>
  );
}
