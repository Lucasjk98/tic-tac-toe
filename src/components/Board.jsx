/* eslint-disable react/no-array-index-key */
import React from 'react';
import Box from './Box';
import '../styles/Board.css';

export default function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Box
          key={idx}
          value={value}
          onClick={() => value === null && onClick(idx)}
        />
      ))}
    </div>
  );
}
